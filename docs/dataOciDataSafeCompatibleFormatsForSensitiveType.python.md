# `dataOciDataSafeCompatibleFormatsForSensitiveType` Submodule <a name="`dataOciDataSafeCompatibleFormatsForSensitiveType` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeCompatibleFormatsForSensitiveType <a name="DataOciDataSafeCompatibleFormatsForSensitiveType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_sensitive_type oci_data_safe_compatible_formats_for_sensitive_type}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_compatible_formats_for_sensitive_type

dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  access_level: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_sensitive_type#compartment_id DataOciDataSafeCompatibleFormatsForSensitiveType#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_sensitive_type#access_level DataOciDataSafeCompatibleFormatsForSensitiveType#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_sensitive_type#compartment_id_in_subtree DataOciDataSafeCompatibleFormatsForSensitiveType#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_sensitive_type#id DataOciDataSafeCompatibleFormatsForSensitiveType#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_sensitive_type#compartment_id DataOciDataSafeCompatibleFormatsForSensitiveType#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.accessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_sensitive_type#access_level DataOciDataSafeCompatibleFormatsForSensitiveType#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_sensitive_type#compartment_id_in_subtree DataOciDataSafeCompatibleFormatsForSensitiveType#compartment_id_in_subtree}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_sensitive_type#id DataOciDataSafeCompatibleFormatsForSensitiveType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_access_level` <a name="reset_access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeCompatibleFormatsForSensitiveType resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_compatible_formats_for_sensitive_type

dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_compatible_formats_for_sensitive_type

dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_compatible_formats_for_sensitive_type

dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_compatible_formats_for_sensitive_type

dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeCompatibleFormatsForSensitiveType resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeCompatibleFormatsForSensitiveType to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeCompatibleFormatsForSensitiveType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_sensitive_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeCompatibleFormatsForSensitiveType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.formatsForSensitiveType">formats_for_sensitive_type</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList">DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `formats_for_sensitive_type`<sup>Required</sup> <a name="formats_for_sensitive_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.formatsForSensitiveType"></a>

```python
formats_for_sensitive_type: DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList">DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig <a name="DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_compatible_formats_for_sensitive_type

dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  access_level: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_sensitive_type#compartment_id DataOciDataSafeCompatibleFormatsForSensitiveType#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_sensitive_type#access_level DataOciDataSafeCompatibleFormatsForSensitiveType#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_sensitive_type#compartment_id_in_subtree DataOciDataSafeCompatibleFormatsForSensitiveType#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_sensitive_type#id DataOciDataSafeCompatibleFormatsForSensitiveType#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_sensitive_type#compartment_id DataOciDataSafeCompatibleFormatsForSensitiveType#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_sensitive_type#access_level DataOciDataSafeCompatibleFormatsForSensitiveType#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_sensitive_type#compartment_id_in_subtree DataOciDataSafeCompatibleFormatsForSensitiveType#compartment_id_in_subtree}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_sensitive_type#id DataOciDataSafeCompatibleFormatsForSensitiveType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveType <a name="DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveType"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveType.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_compatible_formats_for_sensitive_type

dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveType()
```


### DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormats <a name="DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormats" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormats"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormats.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_compatible_formats_for_sensitive_type

dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormats()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList <a name="DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_compatible_formats_for_sensitive_type

dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList <a name="DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_compatible_formats_for_sensitive_type

dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference <a name="DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_compatible_formats_for_sensitive_type

dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormats">DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormats</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormats
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormats">DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormats</a>

---


### DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference <a name="DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_compatible_formats_for_sensitive_type

dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.property.maskingFormats">masking_formats</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList">DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.property.sensitiveTypeId">sensitive_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveType">DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `masking_formats`<sup>Required</sup> <a name="masking_formats" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.property.maskingFormats"></a>

```python
masking_formats: DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList">DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList</a>

---

##### `sensitive_type_id`<sup>Required</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.property.sensitiveTypeId"></a>

```python
sensitive_type_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveType
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveType">DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveType</a>

---



