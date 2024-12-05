# `dataOciDataLabelingServiceDatasets` Submodule <a name="`dataOciDataLabelingServiceDatasets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataLabelingServiceDatasets <a name="DataOciDataLabelingServiceDatasets" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets oci_data_labeling_service_datasets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets(
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
  annotation_format: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataLabelingServiceDatasetsFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#compartment_id DataOciDataLabelingServiceDatasets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.annotationFormat">annotation_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#annotation_format DataOciDataLabelingServiceDatasets#annotation_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#display_name DataOciDataLabelingServiceDatasets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter">DataOciDataLabelingServiceDatasetsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#id DataOciDataLabelingServiceDatasets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#state DataOciDataLabelingServiceDatasets#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#compartment_id DataOciDataLabelingServiceDatasets#compartment_id}.

---

##### `annotation_format`<sup>Optional</sup> <a name="annotation_format" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.annotationFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#annotation_format DataOciDataLabelingServiceDatasets#annotation_format}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#display_name DataOciDataLabelingServiceDatasets#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter">DataOciDataLabelingServiceDatasetsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#filter DataOciDataLabelingServiceDatasets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#id DataOciDataLabelingServiceDatasets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#state DataOciDataLabelingServiceDatasets#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetAnnotationFormat">reset_annotation_format</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataLabelingServiceDatasetsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter">DataOciDataLabelingServiceDatasetsFilter</a>]]

---

##### `reset_annotation_format` <a name="reset_annotation_format" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetAnnotationFormat"></a>

```python
def reset_annotation_format() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataLabelingServiceDatasets resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataLabelingServiceDatasets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataLabelingServiceDatasets to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataLabelingServiceDatasets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataLabelingServiceDatasets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.datasetCollection">dataset_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList">DataOciDataLabelingServiceDatasetsDatasetCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList">DataOciDataLabelingServiceDatasetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.annotationFormatInput">annotation_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter">DataOciDataLabelingServiceDatasetsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.annotationFormat">annotation_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `dataset_collection`<sup>Required</sup> <a name="dataset_collection" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.datasetCollection"></a>

```python
dataset_collection: DataOciDataLabelingServiceDatasetsDatasetCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList">DataOciDataLabelingServiceDatasetsDatasetCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.filter"></a>

```python
filter: DataOciDataLabelingServiceDatasetsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList">DataOciDataLabelingServiceDatasetsFilterList</a>

---

##### `annotation_format_input`<sup>Optional</sup> <a name="annotation_format_input" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.annotationFormatInput"></a>

```python
annotation_format_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataLabelingServiceDatasetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter">DataOciDataLabelingServiceDatasetsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `annotation_format`<sup>Required</sup> <a name="annotation_format" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.annotationFormat"></a>

```python
annotation_format: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataLabelingServiceDatasetsConfig <a name="DataOciDataLabelingServiceDatasetsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  annotation_format: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataLabelingServiceDatasetsFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#compartment_id DataOciDataLabelingServiceDatasets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.annotationFormat">annotation_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#annotation_format DataOciDataLabelingServiceDatasets#annotation_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#display_name DataOciDataLabelingServiceDatasets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter">DataOciDataLabelingServiceDatasetsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#id DataOciDataLabelingServiceDatasets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#state DataOciDataLabelingServiceDatasets#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#compartment_id DataOciDataLabelingServiceDatasets#compartment_id}.

---

##### `annotation_format`<sup>Optional</sup> <a name="annotation_format" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.annotationFormat"></a>

```python
annotation_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#annotation_format DataOciDataLabelingServiceDatasets#annotation_format}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#display_name DataOciDataLabelingServiceDatasets#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataLabelingServiceDatasetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter">DataOciDataLabelingServiceDatasetsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#filter DataOciDataLabelingServiceDatasets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#id DataOciDataLabelingServiceDatasets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#state DataOciDataLabelingServiceDatasets#state}.

---

### DataOciDataLabelingServiceDatasetsDatasetCollection <a name="DataOciDataLabelingServiceDatasetsDatasetCollection" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollection()
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItems <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItems()
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails()
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata()
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails()
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration()
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat()
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath()
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration()
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet()
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems()
```


### DataOciDataLabelingServiceDatasetsFilter <a name="DataOciDataLabelingServiceDatasetsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#name DataOciDataLabelingServiceDatasets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#values DataOciDataLabelingServiceDatasets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#regex DataOciDataLabelingServiceDatasets#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#name DataOciDataLabelingServiceDatasets#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#values DataOciDataLabelingServiceDatasets#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#regex DataOciDataLabelingServiceDatasets#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.formatType">format_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.textFileTypeMetadata">text_file_type_metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `format_type`<sup>Required</sup> <a name="format_type" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.formatType"></a>

```python
format_type: str
```

- *Type:* str

---

##### `text_file_type_metadata`<sup>Required</sup> <a name="text_file_type_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.textFileTypeMetadata"></a>

```python
text_file_type_metadata: DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnDelimiter">column_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnIndex">column_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.escapeCharacter">escape_character</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.formatType">format_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.lineDelimiter">line_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_delimiter`<sup>Required</sup> <a name="column_delimiter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnDelimiter"></a>

```python
column_delimiter: str
```

- *Type:* str

---

##### `column_index`<sup>Required</sup> <a name="column_index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnIndex"></a>

```python
column_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `escape_character`<sup>Required</sup> <a name="escape_character" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.escapeCharacter"></a>

```python
escape_character: str
```

- *Type:* str

---

##### `format_type`<sup>Required</sup> <a name="format_type" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.formatType"></a>

```python
format_type: str
```

- *Type:* str

---

##### `line_delimiter`<sup>Required</sup> <a name="line_delimiter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.lineDelimiter"></a>

```python
line_delimiter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.importFormat">import_format</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.importMetadataPath">import_metadata_path</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `import_format`<sup>Required</sup> <a name="import_format" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.importFormat"></a>

```python
import_format: DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList</a>

---

##### `import_metadata_path`<sup>Required</sup> <a name="import_metadata_path" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.importMetadataPath"></a>

```python
import_metadata_path: DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.items"></a>

```python
items: DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.additionalProperties">additional_properties</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.annotationFormat">annotation_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.datasetFormatDetails">dataset_format_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.datasetSourceDetails">dataset_source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.initialImportDatasetConfiguration">initial_import_dataset_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.initialRecordGenerationConfiguration">initial_record_generation_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.labelingInstructions">labeling_instructions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.labelSet">label_set</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.lifecycleSubstate">lifecycle_substate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItems">DataOciDataLabelingServiceDatasetsDatasetCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.additionalProperties"></a>

```python
additional_properties: StringMap
```

- *Type:* cdktf.StringMap

---

##### `annotation_format`<sup>Required</sup> <a name="annotation_format" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.annotationFormat"></a>

```python
annotation_format: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `dataset_format_details`<sup>Required</sup> <a name="dataset_format_details" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.datasetFormatDetails"></a>

```python
dataset_format_details: DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList</a>

---

##### `dataset_source_details`<sup>Required</sup> <a name="dataset_source_details" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.datasetSourceDetails"></a>

```python
dataset_source_details: DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `initial_import_dataset_configuration`<sup>Required</sup> <a name="initial_import_dataset_configuration" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.initialImportDatasetConfiguration"></a>

```python
initial_import_dataset_configuration: DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList</a>

---

##### `initial_record_generation_configuration`<sup>Required</sup> <a name="initial_record_generation_configuration" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.initialRecordGenerationConfiguration"></a>

```python
initial_record_generation_configuration: DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList</a>

---

##### `labeling_instructions`<sup>Required</sup> <a name="labeling_instructions" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.labelingInstructions"></a>

```python
labeling_instructions: str
```

- *Type:* str

---

##### `label_set`<sup>Required</sup> <a name="label_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.labelSet"></a>

```python
label_set: DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `lifecycle_substate`<sup>Required</sup> <a name="lifecycle_substate" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.lifecycleSubstate"></a>

```python
lifecycle_substate: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataLabelingServiceDatasetsDatasetCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItems">DataOciDataLabelingServiceDatasetsDatasetCollectionItems</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollection">DataOciDataLabelingServiceDatasetsDatasetCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.items"></a>

```python
items: DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataLabelingServiceDatasetsDatasetCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollection">DataOciDataLabelingServiceDatasetsDatasetCollection</a>

---


### DataOciDataLabelingServiceDatasetsFilterList <a name="DataOciDataLabelingServiceDatasetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataLabelingServiceDatasetsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter">DataOciDataLabelingServiceDatasetsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataLabelingServiceDatasetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter">DataOciDataLabelingServiceDatasetsFilter</a>]]

---


### DataOciDataLabelingServiceDatasetsFilterOutputReference <a name="DataOciDataLabelingServiceDatasetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_datasets

dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter">DataOciDataLabelingServiceDatasetsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataLabelingServiceDatasetsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter">DataOciDataLabelingServiceDatasetsFilter</a>]

---



