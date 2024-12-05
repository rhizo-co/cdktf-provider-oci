# `dataOciLicenseManagerTopUtilizedResources` Submodule <a name="`dataOciLicenseManagerTopUtilizedResources` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLicenseManagerTopUtilizedResources <a name="DataOciLicenseManagerTopUtilizedResources" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources oci_license_manager_top_utilized_resources}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_top_utilized_resources

dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources(
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
  id: str = None,
  is_compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  resource_unit_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#compartment_id DataOciLicenseManagerTopUtilizedResources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#id DataOciLicenseManagerTopUtilizedResources#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.isCompartmentIdInSubtree">is_compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#is_compartment_id_in_subtree DataOciLicenseManagerTopUtilizedResources#is_compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.resourceUnitType">resource_unit_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#resource_unit_type DataOciLicenseManagerTopUtilizedResources#resource_unit_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#compartment_id DataOciLicenseManagerTopUtilizedResources#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#id DataOciLicenseManagerTopUtilizedResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_compartment_id_in_subtree`<sup>Optional</sup> <a name="is_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.isCompartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#is_compartment_id_in_subtree DataOciLicenseManagerTopUtilizedResources#is_compartment_id_in_subtree}.

---

##### `resource_unit_type`<sup>Optional</sup> <a name="resource_unit_type" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.resourceUnitType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#resource_unit_type DataOciLicenseManagerTopUtilizedResources#resource_unit_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.resetIsCompartmentIdInSubtree">reset_is_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.resetResourceUnitType">reset_resource_unit_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_compartment_id_in_subtree` <a name="reset_is_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.resetIsCompartmentIdInSubtree"></a>

```python
def reset_is_compartment_id_in_subtree() -> None
```

##### `reset_resource_unit_type` <a name="reset_resource_unit_type" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.resetResourceUnitType"></a>

```python
def reset_resource_unit_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciLicenseManagerTopUtilizedResources resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_top_utilized_resources

dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_top_utilized_resources

dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_top_utilized_resources

dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_top_utilized_resources

dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciLicenseManagerTopUtilizedResources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciLicenseManagerTopUtilizedResources to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciLicenseManagerTopUtilizedResources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLicenseManagerTopUtilizedResources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList">DataOciLicenseManagerTopUtilizedResourcesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.isCompartmentIdInSubtreeInput">is_compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.resourceUnitTypeInput">resource_unit_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.isCompartmentIdInSubtree">is_compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.resourceUnitType">resource_unit_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.items"></a>

```python
items: DataOciLicenseManagerTopUtilizedResourcesItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList">DataOciLicenseManagerTopUtilizedResourcesItemsList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_compartment_id_in_subtree_input`<sup>Optional</sup> <a name="is_compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.isCompartmentIdInSubtreeInput"></a>

```python
is_compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_unit_type_input`<sup>Optional</sup> <a name="resource_unit_type_input" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.resourceUnitTypeInput"></a>

```python
resource_unit_type_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_compartment_id_in_subtree`<sup>Required</sup> <a name="is_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.isCompartmentIdInSubtree"></a>

```python
is_compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_unit_type`<sup>Required</sup> <a name="resource_unit_type" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.resourceUnitType"></a>

```python
resource_unit_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLicenseManagerTopUtilizedResourcesConfig <a name="DataOciLicenseManagerTopUtilizedResourcesConfig" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_top_utilized_resources

dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  id: str = None,
  is_compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  resource_unit_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#compartment_id DataOciLicenseManagerTopUtilizedResources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#id DataOciLicenseManagerTopUtilizedResources#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.isCompartmentIdInSubtree">is_compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#is_compartment_id_in_subtree DataOciLicenseManagerTopUtilizedResources#is_compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.resourceUnitType">resource_unit_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#resource_unit_type DataOciLicenseManagerTopUtilizedResources#resource_unit_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#compartment_id DataOciLicenseManagerTopUtilizedResources#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#id DataOciLicenseManagerTopUtilizedResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_compartment_id_in_subtree`<sup>Optional</sup> <a name="is_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.isCompartmentIdInSubtree"></a>

```python
is_compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#is_compartment_id_in_subtree DataOciLicenseManagerTopUtilizedResources#is_compartment_id_in_subtree}.

---

##### `resource_unit_type`<sup>Optional</sup> <a name="resource_unit_type" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.resourceUnitType"></a>

```python
resource_unit_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#resource_unit_type DataOciLicenseManagerTopUtilizedResources#resource_unit_type}.

---

### DataOciLicenseManagerTopUtilizedResourcesItems <a name="DataOciLicenseManagerTopUtilizedResourcesItems" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_top_utilized_resources

dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLicenseManagerTopUtilizedResourcesItemsList <a name="DataOciLicenseManagerTopUtilizedResourcesItemsList" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_top_utilized_resources

dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference <a name="DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_top_utilized_resources

dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.resourceCompartmentId">resource_compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.resourceCompartmentName">resource_compartment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.totalUnits">total_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.unitType">unit_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItems">DataOciLicenseManagerTopUtilizedResourcesItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_compartment_id`<sup>Required</sup> <a name="resource_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.resourceCompartmentId"></a>

```python
resource_compartment_id: str
```

- *Type:* str

---

##### `resource_compartment_name`<sup>Required</sup> <a name="resource_compartment_name" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.resourceCompartmentName"></a>

```python
resource_compartment_name: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `total_units`<sup>Required</sup> <a name="total_units" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.totalUnits"></a>

```python
total_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit_type`<sup>Required</sup> <a name="unit_type" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.unitType"></a>

```python
unit_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLicenseManagerTopUtilizedResourcesItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItems">DataOciLicenseManagerTopUtilizedResourcesItems</a>

---



