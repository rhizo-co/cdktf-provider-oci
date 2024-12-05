# `dataOciIdentityDomainsAccountRecoverySettings` Submodule <a name="`dataOciIdentityDomainsAccountRecoverySettings` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsAccountRecoverySettings <a name="DataOciIdentityDomainsAccountRecoverySettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings oci_identity_domains_account_recovery_settings}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_recovery_settings

dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings(
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
  resource_type_schema_version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#idcs_endpoint DataOciIdentityDomainsAccountRecoverySettings#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#attributes DataOciIdentityDomainsAccountRecoverySettings#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#attribute_sets DataOciIdentityDomainsAccountRecoverySettings#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#authorization DataOciIdentityDomainsAccountRecoverySettings#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#compartment_id DataOciIdentityDomainsAccountRecoverySettings#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#id DataOciIdentityDomainsAccountRecoverySettings#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#resource_type_schema_version DataOciIdentityDomainsAccountRecoverySettings#resource_type_schema_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#idcs_endpoint DataOciIdentityDomainsAccountRecoverySettings#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#attributes DataOciIdentityDomainsAccountRecoverySettings#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#attribute_sets DataOciIdentityDomainsAccountRecoverySettings#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#authorization DataOciIdentityDomainsAccountRecoverySettings#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#compartment_id DataOciIdentityDomainsAccountRecoverySettings#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#id DataOciIdentityDomainsAccountRecoverySettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#resource_type_schema_version DataOciIdentityDomainsAccountRecoverySettings#resource_type_schema_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsAccountRecoverySettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_recovery_settings

dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_recovery_settings

dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_recovery_settings

dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_recovery_settings

dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsAccountRecoverySettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsAccountRecoverySettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsAccountRecoverySettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsAccountRecoverySettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.accountRecoverySettings">account_recovery_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.totalResults">total_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `account_recovery_settings`<sup>Required</sup> <a name="account_recovery_settings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.accountRecoverySettings"></a>

```python
account_recovery_settings: DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList</a>

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `start_index`<sup>Required</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_results`<sup>Required</sup> <a name="total_results" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.totalResults"></a>

```python
total_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettings <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_recovery_settings

dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettings()
```


### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedBy <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_recovery_settings

dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedBy()
```


### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedBy <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_recovery_settings

dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedBy()
```


### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMeta <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_recovery_settings

dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMeta()
```


### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTags <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_recovery_settings

dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTags()
```


### DataOciIdentityDomainsAccountRecoverySettingsConfig <a name="DataOciIdentityDomainsAccountRecoverySettingsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_recovery_settings

dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig(
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
  resource_type_schema_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#idcs_endpoint DataOciIdentityDomainsAccountRecoverySettings#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#attributes DataOciIdentityDomainsAccountRecoverySettings#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#attribute_sets DataOciIdentityDomainsAccountRecoverySettings#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#authorization DataOciIdentityDomainsAccountRecoverySettings#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#compartment_id DataOciIdentityDomainsAccountRecoverySettings#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#id DataOciIdentityDomainsAccountRecoverySettings#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#resource_type_schema_version DataOciIdentityDomainsAccountRecoverySettings#resource_type_schema_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#idcs_endpoint DataOciIdentityDomainsAccountRecoverySettings#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#attributes DataOciIdentityDomainsAccountRecoverySettings#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#attribute_sets DataOciIdentityDomainsAccountRecoverySettings#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#authorization DataOciIdentityDomainsAccountRecoverySettings#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#compartment_id DataOciIdentityDomainsAccountRecoverySettings#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#id DataOciIdentityDomainsAccountRecoverySettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#resource_type_schema_version DataOciIdentityDomainsAccountRecoverySettings#resource_type_schema_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_recovery_settings

dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_recovery_settings

dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedBy">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedBy">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_recovery_settings

dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_recovery_settings

dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedBy">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedBy">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_recovery_settings

dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_recovery_settings

dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_recovery_settings

dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMeta">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMeta">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMeta</a>

---


### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_recovery_settings

dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.accountRecoverySettingId">account_recovery_setting_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.factors">factors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.lockoutDuration">lockout_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.maxIncorrectAttempts">max_incorrect_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettings">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_recovery_setting_id`<sup>Required</sup> <a name="account_recovery_setting_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.accountRecoverySettingId"></a>

```python
account_recovery_setting_id: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `factors`<sup>Required</sup> <a name="factors" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.factors"></a>

```python
factors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList</a>

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lockout_duration`<sup>Required</sup> <a name="lockout_duration" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.lockoutDuration"></a>

```python
lockout_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_incorrect_attempts`<sup>Required</sup> <a name="max_incorrect_attempts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.maxIncorrectAttempts"></a>

```python
max_incorrect_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.meta"></a>

```python
meta: DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.tags"></a>

```python
tags: DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettings">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettings</a>

---


### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_recovery_settings

dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_recovery_settings

dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTags">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTags">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTags</a>

---



