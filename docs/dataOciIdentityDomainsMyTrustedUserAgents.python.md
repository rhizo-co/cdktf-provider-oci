# `dataOciIdentityDomainsMyTrustedUserAgents` Submodule <a name="`dataOciIdentityDomainsMyTrustedUserAgents` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsMyTrustedUserAgents <a name="DataOciIdentityDomainsMyTrustedUserAgents" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents oci_identity_domains_my_trusted_user_agents}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_trusted_user_agents

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  compartment_id: str = None,
  id: str = None,
  my_trusted_user_agent_count: typing.Union[int, float] = None,
  my_trusted_user_agent_filter: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#idcs_endpoint DataOciIdentityDomainsMyTrustedUserAgents#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#attributes DataOciIdentityDomainsMyTrustedUserAgents#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#attribute_sets DataOciIdentityDomainsMyTrustedUserAgents#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#authorization DataOciIdentityDomainsMyTrustedUserAgents#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#compartment_id DataOciIdentityDomainsMyTrustedUserAgents#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#id DataOciIdentityDomainsMyTrustedUserAgents#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.myTrustedUserAgentCount">my_trusted_user_agent_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#my_trusted_user_agent_count DataOciIdentityDomainsMyTrustedUserAgents#my_trusted_user_agent_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.myTrustedUserAgentFilter">my_trusted_user_agent_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#my_trusted_user_agent_filter DataOciIdentityDomainsMyTrustedUserAgents#my_trusted_user_agent_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#resource_type_schema_version DataOciIdentityDomainsMyTrustedUserAgents#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#sort_by DataOciIdentityDomainsMyTrustedUserAgents#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#sort_order DataOciIdentityDomainsMyTrustedUserAgents#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#start_index DataOciIdentityDomainsMyTrustedUserAgents#start_index}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#idcs_endpoint DataOciIdentityDomainsMyTrustedUserAgents#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#attributes DataOciIdentityDomainsMyTrustedUserAgents#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#attribute_sets DataOciIdentityDomainsMyTrustedUserAgents#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#authorization DataOciIdentityDomainsMyTrustedUserAgents#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#compartment_id DataOciIdentityDomainsMyTrustedUserAgents#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#id DataOciIdentityDomainsMyTrustedUserAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `my_trusted_user_agent_count`<sup>Optional</sup> <a name="my_trusted_user_agent_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.myTrustedUserAgentCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#my_trusted_user_agent_count DataOciIdentityDomainsMyTrustedUserAgents#my_trusted_user_agent_count}.

---

##### `my_trusted_user_agent_filter`<sup>Optional</sup> <a name="my_trusted_user_agent_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.myTrustedUserAgentFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#my_trusted_user_agent_filter DataOciIdentityDomainsMyTrustedUserAgents#my_trusted_user_agent_filter}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#resource_type_schema_version DataOciIdentityDomainsMyTrustedUserAgents#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.sortBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#sort_by DataOciIdentityDomainsMyTrustedUserAgents#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.sortOrder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#sort_order DataOciIdentityDomainsMyTrustedUserAgents#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.startIndex"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#start_index DataOciIdentityDomainsMyTrustedUserAgents#start_index}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetMyTrustedUserAgentCount">reset_my_trusted_user_agent_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetMyTrustedUserAgentFilter">reset_my_trusted_user_agent_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetSortBy">reset_sort_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetSortOrder">reset_sort_order</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetStartIndex">reset_start_index</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_my_trusted_user_agent_count` <a name="reset_my_trusted_user_agent_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetMyTrustedUserAgentCount"></a>

```python
def reset_my_trusted_user_agent_count() -> None
```

##### `reset_my_trusted_user_agent_filter` <a name="reset_my_trusted_user_agent_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetMyTrustedUserAgentFilter"></a>

```python
def reset_my_trusted_user_agent_filter() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_sort_by` <a name="reset_sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetSortBy"></a>

```python
def reset_sort_by() -> None
```

##### `reset_sort_order` <a name="reset_sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetSortOrder"></a>

```python
def reset_sort_order() -> None
```

##### `reset_start_index` <a name="reset_start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetStartIndex"></a>

```python
def reset_start_index() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsMyTrustedUserAgents resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_trusted_user_agents

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_trusted_user_agents

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_trusted_user_agents

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_trusted_user_agents

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsMyTrustedUserAgents resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsMyTrustedUserAgents to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsMyTrustedUserAgents that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsMyTrustedUserAgents to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.myTrustedUserAgents">my_trusted_user_agents</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.totalResults">total_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.myTrustedUserAgentCountInput">my_trusted_user_agent_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.myTrustedUserAgentFilterInput">my_trusted_user_agent_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.sortByInput">sort_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.sortOrderInput">sort_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.startIndexInput">start_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.myTrustedUserAgentCount">my_trusted_user_agent_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.myTrustedUserAgentFilter">my_trusted_user_agent_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.sortBy">sort_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.sortOrder">sort_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `my_trusted_user_agents`<sup>Required</sup> <a name="my_trusted_user_agents" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.myTrustedUserAgents"></a>

```python
my_trusted_user_agents: DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `total_results`<sup>Required</sup> <a name="total_results" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.totalResults"></a>

```python
total_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `my_trusted_user_agent_count_input`<sup>Optional</sup> <a name="my_trusted_user_agent_count_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.myTrustedUserAgentCountInput"></a>

```python
my_trusted_user_agent_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `my_trusted_user_agent_filter_input`<sup>Optional</sup> <a name="my_trusted_user_agent_filter_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.myTrustedUserAgentFilterInput"></a>

```python
my_trusted_user_agent_filter_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `sort_by_input`<sup>Optional</sup> <a name="sort_by_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.sortByInput"></a>

```python
sort_by_input: str
```

- *Type:* str

---

##### `sort_order_input`<sup>Optional</sup> <a name="sort_order_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.sortOrderInput"></a>

```python
sort_order_input: str
```

- *Type:* str

---

##### `start_index_input`<sup>Optional</sup> <a name="start_index_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.startIndexInput"></a>

```python
start_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `my_trusted_user_agent_count`<sup>Required</sup> <a name="my_trusted_user_agent_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.myTrustedUserAgentCount"></a>

```python
my_trusted_user_agent_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `my_trusted_user_agent_filter`<sup>Required</sup> <a name="my_trusted_user_agent_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.myTrustedUserAgentFilter"></a>

```python
my_trusted_user_agent_filter: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `sort_by`<sup>Required</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

---

##### `start_index`<sup>Required</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsMyTrustedUserAgentsConfig <a name="DataOciIdentityDomainsMyTrustedUserAgentsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_trusted_user_agents

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  compartment_id: str = None,
  id: str = None,
  my_trusted_user_agent_count: typing.Union[int, float] = None,
  my_trusted_user_agent_filter: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#idcs_endpoint DataOciIdentityDomainsMyTrustedUserAgents#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#attributes DataOciIdentityDomainsMyTrustedUserAgents#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#attribute_sets DataOciIdentityDomainsMyTrustedUserAgents#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#authorization DataOciIdentityDomainsMyTrustedUserAgents#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#compartment_id DataOciIdentityDomainsMyTrustedUserAgents#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#id DataOciIdentityDomainsMyTrustedUserAgents#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.myTrustedUserAgentCount">my_trusted_user_agent_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#my_trusted_user_agent_count DataOciIdentityDomainsMyTrustedUserAgents#my_trusted_user_agent_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.myTrustedUserAgentFilter">my_trusted_user_agent_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#my_trusted_user_agent_filter DataOciIdentityDomainsMyTrustedUserAgents#my_trusted_user_agent_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#resource_type_schema_version DataOciIdentityDomainsMyTrustedUserAgents#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#sort_by DataOciIdentityDomainsMyTrustedUserAgents#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#sort_order DataOciIdentityDomainsMyTrustedUserAgents#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#start_index DataOciIdentityDomainsMyTrustedUserAgents#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#idcs_endpoint DataOciIdentityDomainsMyTrustedUserAgents#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#attributes DataOciIdentityDomainsMyTrustedUserAgents#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#attribute_sets DataOciIdentityDomainsMyTrustedUserAgents#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#authorization DataOciIdentityDomainsMyTrustedUserAgents#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#compartment_id DataOciIdentityDomainsMyTrustedUserAgents#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#id DataOciIdentityDomainsMyTrustedUserAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `my_trusted_user_agent_count`<sup>Optional</sup> <a name="my_trusted_user_agent_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.myTrustedUserAgentCount"></a>

```python
my_trusted_user_agent_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#my_trusted_user_agent_count DataOciIdentityDomainsMyTrustedUserAgents#my_trusted_user_agent_count}.

---

##### `my_trusted_user_agent_filter`<sup>Optional</sup> <a name="my_trusted_user_agent_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.myTrustedUserAgentFilter"></a>

```python
my_trusted_user_agent_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#my_trusted_user_agent_filter DataOciIdentityDomainsMyTrustedUserAgents#my_trusted_user_agent_filter}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#resource_type_schema_version DataOciIdentityDomainsMyTrustedUserAgents#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#sort_by DataOciIdentityDomainsMyTrustedUserAgents#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#sort_order DataOciIdentityDomainsMyTrustedUserAgents#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#start_index DataOciIdentityDomainsMyTrustedUserAgents#start_index}.

---

### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgents <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgents" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgents"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgents.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_trusted_user_agents

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgents()
```


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedBy <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_trusted_user_agents

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedBy()
```


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedBy <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_trusted_user_agents

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedBy()
```


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMeta <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_trusted_user_agents

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMeta()
```


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTags <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_trusted_user_agents

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTags()
```


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactors <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactors" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactors"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactors.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_trusted_user_agents

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactors()
```


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUser <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUser.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_trusted_user_agents

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUser()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_trusted_user_agents

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_trusted_user_agents

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedBy">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedBy">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_trusted_user_agents

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_trusted_user_agents

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedBy">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedBy">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_trusted_user_agents

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_trusted_user_agents

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_trusted_user_agents

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMeta">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMeta">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMeta</a>

---


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_trusted_user_agents

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.expiryTime">expiry_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.lastUsedOn">last_used_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.myTrustedUserAgentId">my_trusted_user_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.tokenType">token_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.trustedFactors">trusted_factors</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.trustToken">trust_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgents">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `expiry_time`<sup>Required</sup> <a name="expiry_time" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.expiryTime"></a>

```python
expiry_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList</a>

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `last_used_on`<sup>Required</sup> <a name="last_used_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.lastUsedOn"></a>

```python
last_used_on: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.meta"></a>

```python
meta: DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList</a>

---

##### `my_trusted_user_agent_id`<sup>Required</sup> <a name="my_trusted_user_agent_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.myTrustedUserAgentId"></a>

```python
my_trusted_user_agent_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.tags"></a>

```python
tags: DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `token_type`<sup>Required</sup> <a name="token_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

---

##### `trusted_factors`<sup>Required</sup> <a name="trusted_factors" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.trustedFactors"></a>

```python
trusted_factors: DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList</a>

---

##### `trust_token`<sup>Required</sup> <a name="trust_token" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.trustToken"></a>

```python
trust_token: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.user"></a>

```python
user: DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgents
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgents">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgents</a>

---


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_trusted_user_agents

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_trusted_user_agents

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTags">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTags">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTags</a>

---


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_trusted_user_agents

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_trusted_user_agents

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactors">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactors
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactors">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactors</a>

---


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_trusted_user_agents

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_trusted_user_agents

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUser">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUser
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUser">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUser</a>

---



