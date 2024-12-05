# `dataOciIdentityDomainsOciConsoleSignOnPolicyConsent` Submodule <a name="`dataOciIdentityDomainsOciConsoleSignOnPolicyConsent` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsOciConsoleSignOnPolicyConsent <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsent" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent oci_identity_domains_oci_console_sign_on_policy_consent}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consent

dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent(
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
  oci_console_sign_on_policy_consent_id: str,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  id: str = None,
  resource_type_schema_version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#idcs_endpoint DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.ociConsoleSignOnPolicyConsentId">oci_console_sign_on_policy_consent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#oci_console_sign_on_policy_consent_id DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#oci_console_sign_on_policy_consent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#attributes DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#attribute_sets DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#authorization DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#id DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#resource_type_schema_version DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#resource_type_schema_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#idcs_endpoint DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#idcs_endpoint}.

---

##### `oci_console_sign_on_policy_consent_id`<sup>Required</sup> <a name="oci_console_sign_on_policy_consent_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.ociConsoleSignOnPolicyConsentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#oci_console_sign_on_policy_consent_id DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#oci_console_sign_on_policy_consent_id}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#attributes DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#attribute_sets DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#authorization DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#authorization}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#id DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#resource_type_schema_version DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#resource_type_schema_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsOciConsoleSignOnPolicyConsent resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consent

dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consent

dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consent

dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consent

dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsOciConsoleSignOnPolicyConsent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsOciConsoleSignOnPolicyConsent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsOciConsoleSignOnPolicyConsent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsOciConsoleSignOnPolicyConsent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.changeType">change_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.clientIp">client_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.consentSignedBy">consent_signed_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.justification">justification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.modifiedResource">modified_resource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.notificationRecipients">notification_recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.policyResource">policy_resource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.timeConsentSigned">time_consent_signed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.ociConsoleSignOnPolicyConsentIdInput">oci_console_sign_on_policy_consent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.ociConsoleSignOnPolicyConsentId">oci_console_sign_on_policy_consent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `change_type`<sup>Required</sup> <a name="change_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.changeType"></a>

```python
change_type: str
```

- *Type:* str

---

##### `client_ip`<sup>Required</sup> <a name="client_ip" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.clientIp"></a>

```python
client_ip: str
```

- *Type:* str

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `consent_signed_by`<sup>Required</sup> <a name="consent_signed_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.consentSignedBy"></a>

```python
consent_signed_by: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList</a>

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList</a>

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `justification`<sup>Required</sup> <a name="justification" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.justification"></a>

```python
justification: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.meta"></a>

```python
meta: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList</a>

---

##### `modified_resource`<sup>Required</sup> <a name="modified_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.modifiedResource"></a>

```python
modified_resource: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList</a>

---

##### `notification_recipients`<sup>Required</sup> <a name="notification_recipients" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.notificationRecipients"></a>

```python
notification_recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `policy_resource`<sup>Required</sup> <a name="policy_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.policyResource"></a>

```python
policy_resource: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList</a>

---

##### `reason`<sup>Required</sup> <a name="reason" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.tags"></a>

```python
tags: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `time_consent_signed`<sup>Required</sup> <a name="time_consent_signed" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.timeConsentSigned"></a>

```python
time_consent_signed: str
```

- *Type:* str

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `oci_console_sign_on_policy_consent_id_input`<sup>Optional</sup> <a name="oci_console_sign_on_policy_consent_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.ociConsoleSignOnPolicyConsentIdInput"></a>

```python
oci_console_sign_on_policy_consent_id_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `oci_console_sign_on_policy_consent_id`<sup>Required</sup> <a name="oci_console_sign_on_policy_consent_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.ociConsoleSignOnPolicyConsentId"></a>

```python
oci_console_sign_on_policy_consent_id: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consent

dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  oci_console_sign_on_policy_consent_id: str,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  id: str = None,
  resource_type_schema_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#idcs_endpoint DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.ociConsoleSignOnPolicyConsentId">oci_console_sign_on_policy_consent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#oci_console_sign_on_policy_consent_id DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#oci_console_sign_on_policy_consent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#attributes DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#attribute_sets DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#authorization DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#id DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#resource_type_schema_version DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#resource_type_schema_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#idcs_endpoint DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#idcs_endpoint}.

---

##### `oci_console_sign_on_policy_consent_id`<sup>Required</sup> <a name="oci_console_sign_on_policy_consent_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.ociConsoleSignOnPolicyConsentId"></a>

```python
oci_console_sign_on_policy_consent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#oci_console_sign_on_policy_consent_id DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#oci_console_sign_on_policy_consent_id}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#attributes DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#attribute_sets DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#authorization DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#authorization}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#id DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#resource_type_schema_version DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#resource_type_schema_version}.

---

### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consent

dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy()
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consent

dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy()
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consent

dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy()
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consent

dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta()
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consent

dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource()
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consent

dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource()
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consent

dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consent

dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consent

dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consent

dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consent

dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consent

dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consent

dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consent

dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consent

dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consent

dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consent

dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consent

dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consent

dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consent

dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oci_console_sign_on_policy_consent

dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags</a>

---



