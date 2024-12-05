# `dataOciJmsJavaDownloadsJavaLicenses` Submodule <a name="`dataOciJmsJavaDownloadsJavaLicenses` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsJavaDownloadsJavaLicenses <a name="DataOciJmsJavaDownloadsJavaLicenses" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_licenses oci_jms_java_downloads_java_licenses}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_licenses

dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaLicensesFilter]] = None,
  id: str = None,
  license_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_licenses#display_name DataOciJmsJavaDownloadsJavaLicenses#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilter">DataOciJmsJavaDownloadsJavaLicensesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_licenses#id DataOciJmsJavaDownloadsJavaLicenses#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.Initializer.parameter.licenseType">license_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_licenses#license_type DataOciJmsJavaDownloadsJavaLicenses#license_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_licenses#display_name DataOciJmsJavaDownloadsJavaLicenses#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilter">DataOciJmsJavaDownloadsJavaLicensesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_licenses#filter DataOciJmsJavaDownloadsJavaLicenses#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_licenses#id DataOciJmsJavaDownloadsJavaLicenses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license_type`<sup>Optional</sup> <a name="license_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.Initializer.parameter.licenseType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_licenses#license_type DataOciJmsJavaDownloadsJavaLicenses#license_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.resetLicenseType">reset_license_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaLicensesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilter">DataOciJmsJavaDownloadsJavaLicensesFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_license_type` <a name="reset_license_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.resetLicenseType"></a>

```python
def reset_license_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciJmsJavaDownloadsJavaLicenses resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_licenses

dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_licenses

dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_licenses

dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_licenses

dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciJmsJavaDownloadsJavaLicenses resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciJmsJavaDownloadsJavaLicenses to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciJmsJavaDownloadsJavaLicenses that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_licenses#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsJavaDownloadsJavaLicenses to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList">DataOciJmsJavaDownloadsJavaLicensesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.javaLicenseCollection">java_license_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList">DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilter">DataOciJmsJavaDownloadsJavaLicensesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.licenseTypeInput">license_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.licenseType">license_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.filter"></a>

```python
filter: DataOciJmsJavaDownloadsJavaLicensesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList">DataOciJmsJavaDownloadsJavaLicensesFilterList</a>

---

##### `java_license_collection`<sup>Required</sup> <a name="java_license_collection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.javaLicenseCollection"></a>

```python
java_license_collection: DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList">DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaLicensesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilter">DataOciJmsJavaDownloadsJavaLicensesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `license_type_input`<sup>Optional</sup> <a name="license_type_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.licenseTypeInput"></a>

```python
license_type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicenses.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsJavaDownloadsJavaLicensesConfig <a name="DataOciJmsJavaDownloadsJavaLicensesConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_licenses

dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaLicensesFilter]] = None,
  id: str = None,
  license_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_licenses#display_name DataOciJmsJavaDownloadsJavaLicenses#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilter">DataOciJmsJavaDownloadsJavaLicensesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_licenses#id DataOciJmsJavaDownloadsJavaLicenses#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesConfig.property.licenseType">license_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_licenses#license_type DataOciJmsJavaDownloadsJavaLicenses#license_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_licenses#display_name DataOciJmsJavaDownloadsJavaLicenses#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaLicensesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilter">DataOciJmsJavaDownloadsJavaLicensesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_licenses#filter DataOciJmsJavaDownloadsJavaLicenses#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_licenses#id DataOciJmsJavaDownloadsJavaLicenses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license_type`<sup>Optional</sup> <a name="license_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesConfig.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_licenses#license_type DataOciJmsJavaDownloadsJavaLicenses#license_type}.

---

### DataOciJmsJavaDownloadsJavaLicensesFilter <a name="DataOciJmsJavaDownloadsJavaLicensesFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_licenses

dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_licenses#name DataOciJmsJavaDownloadsJavaLicenses#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_licenses#values DataOciJmsJavaDownloadsJavaLicenses#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_licenses#regex DataOciJmsJavaDownloadsJavaLicenses#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_licenses#name DataOciJmsJavaDownloadsJavaLicenses#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_licenses#values DataOciJmsJavaDownloadsJavaLicenses#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_licenses#regex DataOciJmsJavaDownloadsJavaLicenses#regex}.

---

### DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollection <a name="DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_licenses

dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollection()
```


### DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItems <a name="DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_licenses

dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsJavaDownloadsJavaLicensesFilterList <a name="DataOciJmsJavaDownloadsJavaLicensesFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_licenses

dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilter">DataOciJmsJavaDownloadsJavaLicensesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciJmsJavaDownloadsJavaLicensesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilter">DataOciJmsJavaDownloadsJavaLicensesFilter</a>]]

---


### DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference <a name="DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_licenses

dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilter">DataOciJmsJavaDownloadsJavaLicensesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciJmsJavaDownloadsJavaLicensesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesFilter">DataOciJmsJavaDownloadsJavaLicensesFilter</a>]

---


### DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList <a name="DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_licenses

dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference <a name="DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_licenses

dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.property.licenseType">license_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.property.licenseUrl">license_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItems">DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

---

##### `license_url`<sup>Required</sup> <a name="license_url" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.property.licenseUrl"></a>

```python
license_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItems">DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItems</a>

---


### DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList <a name="DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_licenses

dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference <a name="DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_licenses

dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList">DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollection">DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.property.items"></a>

```python
items: DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList">DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenses.DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollection">DataOciJmsJavaDownloadsJavaLicensesJavaLicenseCollection</a>

---



