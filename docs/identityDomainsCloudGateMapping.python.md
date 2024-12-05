# `identityDomainsCloudGateMapping` Submodule <a name="`identityDomainsCloudGateMapping` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsCloudGateMapping <a name="IdentityDomainsCloudGateMapping" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping oci_identity_domains_cloud_gate_mapping}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_cloud_gate_mapping

identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_gate: IdentityDomainsCloudGateMappingCloudGate,
  gateway_app: IdentityDomainsCloudGateMappingGatewayApp,
  idcs_endpoint: str,
  policy_name: str,
  resource_prefix: str,
  schemas: typing.List[str],
  server: IdentityDomainsCloudGateMappingServer,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  description: str = None,
  nginx_settings: str = None,
  ocid: str = None,
  proxy_pass: str = None,
  resource_type_schema_version: str = None,
  tags: typing.Union[IResolvable, typing.List[IdentityDomainsCloudGateMappingTags]] = None,
  timeouts: IdentityDomainsCloudGateMappingTimeouts = None,
  upstream_server_group: IdentityDomainsCloudGateMappingUpstreamServerGroup = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.cloudGate">cloud_gate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGate">IdentityDomainsCloudGateMappingCloudGate</a></code> | cloud_gate block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.gatewayApp">gateway_app</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayApp">IdentityDomainsCloudGateMappingGatewayApp</a></code> | gateway_app block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#idcs_endpoint IdentityDomainsCloudGateMapping#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.policyName">policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#policy_name IdentityDomainsCloudGateMapping#policy_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.resourcePrefix">resource_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#resource_prefix IdentityDomainsCloudGateMapping#resource_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.schemas">schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#schemas IdentityDomainsCloudGateMapping#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.server">server</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServer">IdentityDomainsCloudGateMappingServer</a></code> | server block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#attributes IdentityDomainsCloudGateMapping#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#attribute_sets IdentityDomainsCloudGateMapping#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#authorization IdentityDomainsCloudGateMapping#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#description IdentityDomainsCloudGateMapping#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.nginxSettings">nginx_settings</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#nginx_settings IdentityDomainsCloudGateMapping#nginx_settings}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#ocid IdentityDomainsCloudGateMapping#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.proxyPass">proxy_pass</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#proxy_pass IdentityDomainsCloudGateMapping#proxy_pass}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#resource_type_schema_version IdentityDomainsCloudGateMapping#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTags">IdentityDomainsCloudGateMappingTags</a>]]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeouts">IdentityDomainsCloudGateMappingTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.upstreamServerGroup">upstream_server_group</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroup">IdentityDomainsCloudGateMappingUpstreamServerGroup</a></code> | upstream_server_group block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_gate`<sup>Required</sup> <a name="cloud_gate" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.cloudGate"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGate">IdentityDomainsCloudGateMappingCloudGate</a>

cloud_gate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#cloud_gate IdentityDomainsCloudGateMapping#cloud_gate}

---

##### `gateway_app`<sup>Required</sup> <a name="gateway_app" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.gatewayApp"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayApp">IdentityDomainsCloudGateMappingGatewayApp</a>

gateway_app block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#gateway_app IdentityDomainsCloudGateMapping#gateway_app}

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#idcs_endpoint IdentityDomainsCloudGateMapping#idcs_endpoint}.

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.policyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#policy_name IdentityDomainsCloudGateMapping#policy_name}.

---

##### `resource_prefix`<sup>Required</sup> <a name="resource_prefix" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.resourcePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#resource_prefix IdentityDomainsCloudGateMapping#resource_prefix}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.schemas"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#schemas IdentityDomainsCloudGateMapping#schemas}.

---

##### `server`<sup>Required</sup> <a name="server" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.server"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServer">IdentityDomainsCloudGateMappingServer</a>

server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#server IdentityDomainsCloudGateMapping#server}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#attributes IdentityDomainsCloudGateMapping#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#attribute_sets IdentityDomainsCloudGateMapping#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#authorization IdentityDomainsCloudGateMapping#authorization}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#description IdentityDomainsCloudGateMapping#description}.

---

##### `nginx_settings`<sup>Optional</sup> <a name="nginx_settings" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.nginxSettings"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#nginx_settings IdentityDomainsCloudGateMapping#nginx_settings}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.ocid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#ocid IdentityDomainsCloudGateMapping#ocid}.

---

##### `proxy_pass`<sup>Optional</sup> <a name="proxy_pass" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.proxyPass"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#proxy_pass IdentityDomainsCloudGateMapping#proxy_pass}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#resource_type_schema_version IdentityDomainsCloudGateMapping#resource_type_schema_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.tags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTags">IdentityDomainsCloudGateMappingTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#tags IdentityDomainsCloudGateMapping#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeouts">IdentityDomainsCloudGateMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#timeouts IdentityDomainsCloudGateMapping#timeouts}

---

##### `upstream_server_group`<sup>Optional</sup> <a name="upstream_server_group" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.upstreamServerGroup"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroup">IdentityDomainsCloudGateMappingUpstreamServerGroup</a>

upstream_server_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#upstream_server_group IdentityDomainsCloudGateMapping#upstream_server_group}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putCloudGate">put_cloud_gate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putGatewayApp">put_gateway_app</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putServer">put_server</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putUpstreamServerGroup">put_upstream_server_group</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetNginxSettings">reset_nginx_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetOcid">reset_ocid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetProxyPass">reset_proxy_pass</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetUpstreamServerGroup">reset_upstream_server_group</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cloud_gate` <a name="put_cloud_gate" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putCloudGate"></a>

```python
def put_cloud_gate(
  value: str
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putCloudGate.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#value IdentityDomainsCloudGateMapping#value}.

---

##### `put_gateway_app` <a name="put_gateway_app" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putGatewayApp"></a>

```python
def put_gateway_app(
  name: str,
  value: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putGatewayApp.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#name IdentityDomainsCloudGateMapping#name}.

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putGatewayApp.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#value IdentityDomainsCloudGateMapping#value}.

---

##### `put_server` <a name="put_server" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putServer"></a>

```python
def put_server(
  value: str
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putServer.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#value IdentityDomainsCloudGateMapping#value}.

---

##### `put_tags` <a name="put_tags" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsCloudGateMappingTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTags">IdentityDomainsCloudGateMappingTags</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#create IdentityDomainsCloudGateMapping#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#delete IdentityDomainsCloudGateMapping#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#update IdentityDomainsCloudGateMapping#update}.

---

##### `put_upstream_server_group` <a name="put_upstream_server_group" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putUpstreamServerGroup"></a>

```python
def put_upstream_server_group(
  ssl: typing.Union[bool, IResolvable] = None,
  value: str = None
) -> None
```

###### `ssl`<sup>Optional</sup> <a name="ssl" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putUpstreamServerGroup.parameter.ssl"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#ssl IdentityDomainsCloudGateMapping#ssl}.

---

###### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putUpstreamServerGroup.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#value IdentityDomainsCloudGateMapping#value}.

---

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_nginx_settings` <a name="reset_nginx_settings" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetNginxSettings"></a>

```python
def reset_nginx_settings() -> None
```

##### `reset_ocid` <a name="reset_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetOcid"></a>

```python
def reset_ocid() -> None
```

##### `reset_proxy_pass` <a name="reset_proxy_pass" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetProxyPass"></a>

```python
def reset_proxy_pass() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_tags` <a name="reset_tags" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_upstream_server_group` <a name="reset_upstream_server_group" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetUpstreamServerGroup"></a>

```python
def reset_upstream_server_group() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdentityDomainsCloudGateMapping resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_cloud_gate_mapping

identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_cloud_gate_mapping

identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_cloud_gate_mapping

identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_cloud_gate_mapping

identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdentityDomainsCloudGateMapping resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentityDomainsCloudGateMapping to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdentityDomainsCloudGateMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsCloudGateMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.cloudGate">cloud_gate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference">IdentityDomainsCloudGateMappingCloudGateOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.gatewayApp">gateway_app</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference">IdentityDomainsCloudGateMappingGatewayAppOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList">IdentityDomainsCloudGateMappingIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList">IdentityDomainsCloudGateMappingIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.isOpcService">is_opc_service</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList">IdentityDomainsCloudGateMappingMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.server">server</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference">IdentityDomainsCloudGateMappingServerOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList">IdentityDomainsCloudGateMappingTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference">IdentityDomainsCloudGateMappingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.upstreamServerGroup">upstream_server_group</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference">IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.cloudGateInput">cloud_gate_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGate">IdentityDomainsCloudGateMappingCloudGate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.gatewayAppInput">gateway_app_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayApp">IdentityDomainsCloudGateMappingGatewayApp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.nginxSettingsInput">nginx_settings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.ocidInput">ocid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.policyNameInput">policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.proxyPassInput">proxy_pass_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.resourcePrefixInput">resource_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.schemasInput">schemas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.serverInput">server_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServer">IdentityDomainsCloudGateMappingServer</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTags">IdentityDomainsCloudGateMappingTags</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeouts">IdentityDomainsCloudGateMappingTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.upstreamServerGroupInput">upstream_server_group_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroup">IdentityDomainsCloudGateMappingUpstreamServerGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.nginxSettings">nginx_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.proxyPass">proxy_pass</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.resourcePrefix">resource_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_gate`<sup>Required</sup> <a name="cloud_gate" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.cloudGate"></a>

```python
cloud_gate: IdentityDomainsCloudGateMappingCloudGateOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference">IdentityDomainsCloudGateMappingCloudGateOutputReference</a>

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `gateway_app`<sup>Required</sup> <a name="gateway_app" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.gatewayApp"></a>

```python
gateway_app: IdentityDomainsCloudGateMappingGatewayAppOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference">IdentityDomainsCloudGateMappingGatewayAppOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.idcsCreatedBy"></a>

```python
idcs_created_by: IdentityDomainsCloudGateMappingIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList">IdentityDomainsCloudGateMappingIdcsCreatedByList</a>

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: IdentityDomainsCloudGateMappingIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList">IdentityDomainsCloudGateMappingIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_opc_service`<sup>Required</sup> <a name="is_opc_service" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.isOpcService"></a>

```python
is_opc_service: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.meta"></a>

```python
meta: IdentityDomainsCloudGateMappingMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList">IdentityDomainsCloudGateMappingMetaList</a>

---

##### `server`<sup>Required</sup> <a name="server" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.server"></a>

```python
server: IdentityDomainsCloudGateMappingServerOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference">IdentityDomainsCloudGateMappingServerOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.tags"></a>

```python
tags: IdentityDomainsCloudGateMappingTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList">IdentityDomainsCloudGateMappingTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.timeouts"></a>

```python
timeouts: IdentityDomainsCloudGateMappingTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference">IdentityDomainsCloudGateMappingTimeoutsOutputReference</a>

---

##### `upstream_server_group`<sup>Required</sup> <a name="upstream_server_group" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.upstreamServerGroup"></a>

```python
upstream_server_group: IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference">IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference</a>

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `cloud_gate_input`<sup>Optional</sup> <a name="cloud_gate_input" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.cloudGateInput"></a>

```python
cloud_gate_input: IdentityDomainsCloudGateMappingCloudGate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGate">IdentityDomainsCloudGateMappingCloudGate</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `gateway_app_input`<sup>Optional</sup> <a name="gateway_app_input" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.gatewayAppInput"></a>

```python
gateway_app_input: IdentityDomainsCloudGateMappingGatewayApp
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayApp">IdentityDomainsCloudGateMappingGatewayApp</a>

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `nginx_settings_input`<sup>Optional</sup> <a name="nginx_settings_input" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.nginxSettingsInput"></a>

```python
nginx_settings_input: str
```

- *Type:* str

---

##### `ocid_input`<sup>Optional</sup> <a name="ocid_input" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.ocidInput"></a>

```python
ocid_input: str
```

- *Type:* str

---

##### `policy_name_input`<sup>Optional</sup> <a name="policy_name_input" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.policyNameInput"></a>

```python
policy_name_input: str
```

- *Type:* str

---

##### `proxy_pass_input`<sup>Optional</sup> <a name="proxy_pass_input" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.proxyPassInput"></a>

```python
proxy_pass_input: str
```

- *Type:* str

---

##### `resource_prefix_input`<sup>Optional</sup> <a name="resource_prefix_input" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.resourcePrefixInput"></a>

```python
resource_prefix_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `schemas_input`<sup>Optional</sup> <a name="schemas_input" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.schemasInput"></a>

```python
schemas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `server_input`<sup>Optional</sup> <a name="server_input" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.serverInput"></a>

```python
server_input: IdentityDomainsCloudGateMappingServer
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServer">IdentityDomainsCloudGateMappingServer</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[IdentityDomainsCloudGateMappingTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTags">IdentityDomainsCloudGateMappingTags</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IdentityDomainsCloudGateMappingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeouts">IdentityDomainsCloudGateMappingTimeouts</a>]

---

##### `upstream_server_group_input`<sup>Optional</sup> <a name="upstream_server_group_input" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.upstreamServerGroupInput"></a>

```python
upstream_server_group_input: IdentityDomainsCloudGateMappingUpstreamServerGroup
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroup">IdentityDomainsCloudGateMappingUpstreamServerGroup</a>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `nginx_settings`<sup>Required</sup> <a name="nginx_settings" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.nginxSettings"></a>

```python
nginx_settings: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `proxy_pass`<sup>Required</sup> <a name="proxy_pass" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.proxyPass"></a>

```python
proxy_pass: str
```

- *Type:* str

---

##### `resource_prefix`<sup>Required</sup> <a name="resource_prefix" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.resourcePrefix"></a>

```python
resource_prefix: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsCloudGateMappingCloudGate <a name="IdentityDomainsCloudGateMappingCloudGate" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGate.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_cloud_gate_mapping

identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGate(
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGate.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#value IdentityDomainsCloudGateMapping#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGate.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#value IdentityDomainsCloudGateMapping#value}.

---

### IdentityDomainsCloudGateMappingConfig <a name="IdentityDomainsCloudGateMappingConfig" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_cloud_gate_mapping

identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_gate: IdentityDomainsCloudGateMappingCloudGate,
  gateway_app: IdentityDomainsCloudGateMappingGatewayApp,
  idcs_endpoint: str,
  policy_name: str,
  resource_prefix: str,
  schemas: typing.List[str],
  server: IdentityDomainsCloudGateMappingServer,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  description: str = None,
  nginx_settings: str = None,
  ocid: str = None,
  proxy_pass: str = None,
  resource_type_schema_version: str = None,
  tags: typing.Union[IResolvable, typing.List[IdentityDomainsCloudGateMappingTags]] = None,
  timeouts: IdentityDomainsCloudGateMappingTimeouts = None,
  upstream_server_group: IdentityDomainsCloudGateMappingUpstreamServerGroup = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.cloudGate">cloud_gate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGate">IdentityDomainsCloudGateMappingCloudGate</a></code> | cloud_gate block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.gatewayApp">gateway_app</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayApp">IdentityDomainsCloudGateMappingGatewayApp</a></code> | gateway_app block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#idcs_endpoint IdentityDomainsCloudGateMapping#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.policyName">policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#policy_name IdentityDomainsCloudGateMapping#policy_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.resourcePrefix">resource_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#resource_prefix IdentityDomainsCloudGateMapping#resource_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#schemas IdentityDomainsCloudGateMapping#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.server">server</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServer">IdentityDomainsCloudGateMappingServer</a></code> | server block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#attributes IdentityDomainsCloudGateMapping#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#attribute_sets IdentityDomainsCloudGateMapping#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#authorization IdentityDomainsCloudGateMapping#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#description IdentityDomainsCloudGateMapping#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.nginxSettings">nginx_settings</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#nginx_settings IdentityDomainsCloudGateMapping#nginx_settings}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#ocid IdentityDomainsCloudGateMapping#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.proxyPass">proxy_pass</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#proxy_pass IdentityDomainsCloudGateMapping#proxy_pass}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#resource_type_schema_version IdentityDomainsCloudGateMapping#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTags">IdentityDomainsCloudGateMappingTags</a>]]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeouts">IdentityDomainsCloudGateMappingTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.upstreamServerGroup">upstream_server_group</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroup">IdentityDomainsCloudGateMappingUpstreamServerGroup</a></code> | upstream_server_group block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_gate`<sup>Required</sup> <a name="cloud_gate" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.cloudGate"></a>

```python
cloud_gate: IdentityDomainsCloudGateMappingCloudGate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGate">IdentityDomainsCloudGateMappingCloudGate</a>

cloud_gate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#cloud_gate IdentityDomainsCloudGateMapping#cloud_gate}

---

##### `gateway_app`<sup>Required</sup> <a name="gateway_app" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.gatewayApp"></a>

```python
gateway_app: IdentityDomainsCloudGateMappingGatewayApp
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayApp">IdentityDomainsCloudGateMappingGatewayApp</a>

gateway_app block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#gateway_app IdentityDomainsCloudGateMapping#gateway_app}

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#idcs_endpoint IdentityDomainsCloudGateMapping#idcs_endpoint}.

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#policy_name IdentityDomainsCloudGateMapping#policy_name}.

---

##### `resource_prefix`<sup>Required</sup> <a name="resource_prefix" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.resourcePrefix"></a>

```python
resource_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#resource_prefix IdentityDomainsCloudGateMapping#resource_prefix}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#schemas IdentityDomainsCloudGateMapping#schemas}.

---

##### `server`<sup>Required</sup> <a name="server" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.server"></a>

```python
server: IdentityDomainsCloudGateMappingServer
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServer">IdentityDomainsCloudGateMappingServer</a>

server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#server IdentityDomainsCloudGateMapping#server}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#attributes IdentityDomainsCloudGateMapping#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#attribute_sets IdentityDomainsCloudGateMapping#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#authorization IdentityDomainsCloudGateMapping#authorization}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#description IdentityDomainsCloudGateMapping#description}.

---

##### `nginx_settings`<sup>Optional</sup> <a name="nginx_settings" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.nginxSettings"></a>

```python
nginx_settings: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#nginx_settings IdentityDomainsCloudGateMapping#nginx_settings}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#ocid IdentityDomainsCloudGateMapping#ocid}.

---

##### `proxy_pass`<sup>Optional</sup> <a name="proxy_pass" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.proxyPass"></a>

```python
proxy_pass: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#proxy_pass IdentityDomainsCloudGateMapping#proxy_pass}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#resource_type_schema_version IdentityDomainsCloudGateMapping#resource_type_schema_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[IdentityDomainsCloudGateMappingTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTags">IdentityDomainsCloudGateMappingTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#tags IdentityDomainsCloudGateMapping#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.timeouts"></a>

```python
timeouts: IdentityDomainsCloudGateMappingTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeouts">IdentityDomainsCloudGateMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#timeouts IdentityDomainsCloudGateMapping#timeouts}

---

##### `upstream_server_group`<sup>Optional</sup> <a name="upstream_server_group" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.upstreamServerGroup"></a>

```python
upstream_server_group: IdentityDomainsCloudGateMappingUpstreamServerGroup
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroup">IdentityDomainsCloudGateMappingUpstreamServerGroup</a>

upstream_server_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#upstream_server_group IdentityDomainsCloudGateMapping#upstream_server_group}

---

### IdentityDomainsCloudGateMappingGatewayApp <a name="IdentityDomainsCloudGateMappingGatewayApp" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayApp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayApp.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_cloud_gate_mapping

identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayApp(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayApp.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#name IdentityDomainsCloudGateMapping#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayApp.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#value IdentityDomainsCloudGateMapping#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayApp.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#name IdentityDomainsCloudGateMapping#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayApp.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#value IdentityDomainsCloudGateMapping#value}.

---

### IdentityDomainsCloudGateMappingIdcsCreatedBy <a name="IdentityDomainsCloudGateMappingIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_cloud_gate_mapping

identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedBy()
```


### IdentityDomainsCloudGateMappingIdcsLastModifiedBy <a name="IdentityDomainsCloudGateMappingIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_cloud_gate_mapping

identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedBy()
```


### IdentityDomainsCloudGateMappingMeta <a name="IdentityDomainsCloudGateMappingMeta" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_cloud_gate_mapping

identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMeta()
```


### IdentityDomainsCloudGateMappingServer <a name="IdentityDomainsCloudGateMappingServer" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServer.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_cloud_gate_mapping

identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServer(
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServer.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#value IdentityDomainsCloudGateMapping#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServer.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#value IdentityDomainsCloudGateMapping#value}.

---

### IdentityDomainsCloudGateMappingTags <a name="IdentityDomainsCloudGateMappingTags" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_cloud_gate_mapping

identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTags(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#key IdentityDomainsCloudGateMapping#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#value IdentityDomainsCloudGateMapping#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#key IdentityDomainsCloudGateMapping#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#value IdentityDomainsCloudGateMapping#value}.

---

### IdentityDomainsCloudGateMappingTimeouts <a name="IdentityDomainsCloudGateMappingTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_cloud_gate_mapping

identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#create IdentityDomainsCloudGateMapping#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#delete IdentityDomainsCloudGateMapping#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#update IdentityDomainsCloudGateMapping#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#create IdentityDomainsCloudGateMapping#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#delete IdentityDomainsCloudGateMapping#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#update IdentityDomainsCloudGateMapping#update}.

---

### IdentityDomainsCloudGateMappingUpstreamServerGroup <a name="IdentityDomainsCloudGateMappingUpstreamServerGroup" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroup"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroup.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_cloud_gate_mapping

identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroup(
  ssl: typing.Union[bool, IResolvable] = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroup.property.ssl">ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#ssl IdentityDomainsCloudGateMapping#ssl}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroup.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#value IdentityDomainsCloudGateMapping#value}. |

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroup.property.ssl"></a>

```python
ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#ssl IdentityDomainsCloudGateMapping#ssl}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroup.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#value IdentityDomainsCloudGateMapping#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsCloudGateMappingCloudGateOutputReference <a name="IdentityDomainsCloudGateMappingCloudGateOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_cloud_gate_mapping

identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGate">IdentityDomainsCloudGateMappingCloudGate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsCloudGateMappingCloudGate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGate">IdentityDomainsCloudGateMappingCloudGate</a>

---


### IdentityDomainsCloudGateMappingGatewayAppOutputReference <a name="IdentityDomainsCloudGateMappingGatewayAppOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_cloud_gate_mapping

identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayApp">IdentityDomainsCloudGateMappingGatewayApp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsCloudGateMappingGatewayApp
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayApp">IdentityDomainsCloudGateMappingGatewayApp</a>

---


### IdentityDomainsCloudGateMappingIdcsCreatedByList <a name="IdentityDomainsCloudGateMappingIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_cloud_gate_mapping

identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference <a name="IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_cloud_gate_mapping

identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedBy">IdentityDomainsCloudGateMappingIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsCloudGateMappingIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedBy">IdentityDomainsCloudGateMappingIdcsCreatedBy</a>

---


### IdentityDomainsCloudGateMappingIdcsLastModifiedByList <a name="IdentityDomainsCloudGateMappingIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_cloud_gate_mapping

identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference <a name="IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_cloud_gate_mapping

identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedBy">IdentityDomainsCloudGateMappingIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsCloudGateMappingIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedBy">IdentityDomainsCloudGateMappingIdcsLastModifiedBy</a>

---


### IdentityDomainsCloudGateMappingMetaList <a name="IdentityDomainsCloudGateMappingMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_cloud_gate_mapping

identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsCloudGateMappingMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsCloudGateMappingMetaOutputReference <a name="IdentityDomainsCloudGateMappingMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_cloud_gate_mapping

identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMeta">IdentityDomainsCloudGateMappingMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsCloudGateMappingMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMeta">IdentityDomainsCloudGateMappingMeta</a>

---


### IdentityDomainsCloudGateMappingServerOutputReference <a name="IdentityDomainsCloudGateMappingServerOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_cloud_gate_mapping

identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServer">IdentityDomainsCloudGateMappingServer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsCloudGateMappingServer
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServer">IdentityDomainsCloudGateMappingServer</a>

---


### IdentityDomainsCloudGateMappingTagsList <a name="IdentityDomainsCloudGateMappingTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_cloud_gate_mapping

identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsCloudGateMappingTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTags">IdentityDomainsCloudGateMappingTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsCloudGateMappingTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTags">IdentityDomainsCloudGateMappingTags</a>]]

---


### IdentityDomainsCloudGateMappingTagsOutputReference <a name="IdentityDomainsCloudGateMappingTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_cloud_gate_mapping

identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTags">IdentityDomainsCloudGateMappingTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsCloudGateMappingTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTags">IdentityDomainsCloudGateMappingTags</a>]

---


### IdentityDomainsCloudGateMappingTimeoutsOutputReference <a name="IdentityDomainsCloudGateMappingTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_cloud_gate_mapping

identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeouts">IdentityDomainsCloudGateMappingTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsCloudGateMappingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeouts">IdentityDomainsCloudGateMappingTimeouts</a>]

---


### IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference <a name="IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_cloud_gate_mapping

identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.resetSsl">reset_ssl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ssl` <a name="reset_ssl" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.resetSsl"></a>

```python
def reset_ssl() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.sslInput">ssl_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.ssl">ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroup">IdentityDomainsCloudGateMappingUpstreamServerGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `ssl_input`<sup>Optional</sup> <a name="ssl_input" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.sslInput"></a>

```python
ssl_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.ssl"></a>

```python
ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsCloudGateMappingUpstreamServerGroup
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroup">IdentityDomainsCloudGateMappingUpstreamServerGroup</a>

---



