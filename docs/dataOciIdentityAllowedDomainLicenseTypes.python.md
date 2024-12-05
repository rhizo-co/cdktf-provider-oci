# `dataOciIdentityAllowedDomainLicenseTypes` Submodule <a name="`dataOciIdentityAllowedDomainLicenseTypes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityAllowedDomainLicenseTypes <a name="DataOciIdentityAllowedDomainLicenseTypes" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types oci_identity_allowed_domain_license_types}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_allowed_domain_license_types

dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  current_license_type_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciIdentityAllowedDomainLicenseTypesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.currentLicenseTypeName">current_license_type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#current_license_type_name DataOciIdentityAllowedDomainLicenseTypes#current_license_type_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter">DataOciIdentityAllowedDomainLicenseTypesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#id DataOciIdentityAllowedDomainLicenseTypes#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `current_license_type_name`<sup>Optional</sup> <a name="current_license_type_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.currentLicenseTypeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#current_license_type_name DataOciIdentityAllowedDomainLicenseTypes#current_license_type_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter">DataOciIdentityAllowedDomainLicenseTypesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#filter DataOciIdentityAllowedDomainLicenseTypes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#id DataOciIdentityAllowedDomainLicenseTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.resetCurrentLicenseTypeName">reset_current_license_type_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciIdentityAllowedDomainLicenseTypesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter">DataOciIdentityAllowedDomainLicenseTypesFilter</a>]]

---

##### `reset_current_license_type_name` <a name="reset_current_license_type_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.resetCurrentLicenseTypeName"></a>

```python
def reset_current_license_type_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityAllowedDomainLicenseTypes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_allowed_domain_license_types

dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_allowed_domain_license_types

dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_allowed_domain_license_types

dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_allowed_domain_license_types

dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityAllowedDomainLicenseTypes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityAllowedDomainLicenseTypes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityAllowedDomainLicenseTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityAllowedDomainLicenseTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.allowedDomainLicenseTypes">allowed_domain_license_types</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList">DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList">DataOciIdentityAllowedDomainLicenseTypesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.currentLicenseTypeNameInput">current_license_type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter">DataOciIdentityAllowedDomainLicenseTypesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.currentLicenseTypeName">current_license_type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `allowed_domain_license_types`<sup>Required</sup> <a name="allowed_domain_license_types" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.allowedDomainLicenseTypes"></a>

```python
allowed_domain_license_types: DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList">DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.filter"></a>

```python
filter: DataOciIdentityAllowedDomainLicenseTypesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList">DataOciIdentityAllowedDomainLicenseTypesFilterList</a>

---

##### `current_license_type_name_input`<sup>Optional</sup> <a name="current_license_type_name_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.currentLicenseTypeNameInput"></a>

```python
current_license_type_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciIdentityAllowedDomainLicenseTypesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter">DataOciIdentityAllowedDomainLicenseTypesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `current_license_type_name`<sup>Required</sup> <a name="current_license_type_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.currentLicenseTypeName"></a>

```python
current_license_type_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes <a name="DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_allowed_domain_license_types

dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes()
```


### DataOciIdentityAllowedDomainLicenseTypesConfig <a name="DataOciIdentityAllowedDomainLicenseTypesConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_allowed_domain_license_types

dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  current_license_type_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciIdentityAllowedDomainLicenseTypesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.currentLicenseTypeName">current_license_type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#current_license_type_name DataOciIdentityAllowedDomainLicenseTypes#current_license_type_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter">DataOciIdentityAllowedDomainLicenseTypesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#id DataOciIdentityAllowedDomainLicenseTypes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `current_license_type_name`<sup>Optional</sup> <a name="current_license_type_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.currentLicenseTypeName"></a>

```python
current_license_type_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#current_license_type_name DataOciIdentityAllowedDomainLicenseTypes#current_license_type_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciIdentityAllowedDomainLicenseTypesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter">DataOciIdentityAllowedDomainLicenseTypesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#filter DataOciIdentityAllowedDomainLicenseTypes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#id DataOciIdentityAllowedDomainLicenseTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciIdentityAllowedDomainLicenseTypesFilter <a name="DataOciIdentityAllowedDomainLicenseTypesFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_allowed_domain_license_types

dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#name DataOciIdentityAllowedDomainLicenseTypes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#values DataOciIdentityAllowedDomainLicenseTypes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#regex DataOciIdentityAllowedDomainLicenseTypes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#name DataOciIdentityAllowedDomainLicenseTypes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#values DataOciIdentityAllowedDomainLicenseTypes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#regex DataOciIdentityAllowedDomainLicenseTypes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList <a name="DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_allowed_domain_license_types

dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference <a name="DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_allowed_domain_license_types

dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.licenseType">license_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes">DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes">DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes</a>

---


### DataOciIdentityAllowedDomainLicenseTypesFilterList <a name="DataOciIdentityAllowedDomainLicenseTypesFilterList" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_allowed_domain_license_types

dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter">DataOciIdentityAllowedDomainLicenseTypesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciIdentityAllowedDomainLicenseTypesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter">DataOciIdentityAllowedDomainLicenseTypesFilter</a>]]

---


### DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference <a name="DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_allowed_domain_license_types

dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter">DataOciIdentityAllowedDomainLicenseTypesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciIdentityAllowedDomainLicenseTypesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter">DataOciIdentityAllowedDomainLicenseTypesFilter</a>]

---



