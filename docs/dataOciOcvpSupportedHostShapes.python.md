# `dataOciOcvpSupportedHostShapes` Submodule <a name="`dataOciOcvpSupportedHostShapes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOcvpSupportedHostShapes <a name="DataOciOcvpSupportedHostShapes" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes oci_ocvp_supported_host_shapes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_supported_host_shapes

dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes(
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
  filter: typing.Union[IResolvable, typing.List[DataOciOcvpSupportedHostShapesFilter]] = None,
  id: str = None,
  initial_host_shape_name: str = None,
  is_single_host_sddc_supported: typing.Union[bool, IResolvable] = None,
  name: str = None,
  sddc_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#compartment_id DataOciOcvpSupportedHostShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilter">DataOciOcvpSupportedHostShapesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#id DataOciOcvpSupportedHostShapes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.initialHostShapeName">initial_host_shape_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#initial_host_shape_name DataOciOcvpSupportedHostShapes#initial_host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.isSingleHostSddcSupported">is_single_host_sddc_supported</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#is_single_host_sddc_supported DataOciOcvpSupportedHostShapes#is_single_host_sddc_supported}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#name DataOciOcvpSupportedHostShapes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.sddcType">sddc_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#sddc_type DataOciOcvpSupportedHostShapes#sddc_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#compartment_id DataOciOcvpSupportedHostShapes#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilter">DataOciOcvpSupportedHostShapesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#filter DataOciOcvpSupportedHostShapes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#id DataOciOcvpSupportedHostShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_host_shape_name`<sup>Optional</sup> <a name="initial_host_shape_name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.initialHostShapeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#initial_host_shape_name DataOciOcvpSupportedHostShapes#initial_host_shape_name}.

---

##### `is_single_host_sddc_supported`<sup>Optional</sup> <a name="is_single_host_sddc_supported" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.isSingleHostSddcSupported"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#is_single_host_sddc_supported DataOciOcvpSupportedHostShapes#is_single_host_sddc_supported}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#name DataOciOcvpSupportedHostShapes#name}.

---

##### `sddc_type`<sup>Optional</sup> <a name="sddc_type" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.sddcType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#sddc_type DataOciOcvpSupportedHostShapes#sddc_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.resetInitialHostShapeName">reset_initial_host_shape_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.resetIsSingleHostSddcSupported">reset_is_single_host_sddc_supported</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.resetSddcType">reset_sddc_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOcvpSupportedHostShapesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilter">DataOciOcvpSupportedHostShapesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_initial_host_shape_name` <a name="reset_initial_host_shape_name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.resetInitialHostShapeName"></a>

```python
def reset_initial_host_shape_name() -> None
```

##### `reset_is_single_host_sddc_supported` <a name="reset_is_single_host_sddc_supported" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.resetIsSingleHostSddcSupported"></a>

```python
def reset_is_single_host_sddc_supported() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_sddc_type` <a name="reset_sddc_type" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.resetSddcType"></a>

```python
def reset_sddc_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOcvpSupportedHostShapes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_supported_host_shapes

dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_supported_host_shapes

dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_supported_host_shapes

dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_supported_host_shapes

dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOcvpSupportedHostShapes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOcvpSupportedHostShapes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOcvpSupportedHostShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOcvpSupportedHostShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList">DataOciOcvpSupportedHostShapesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList">DataOciOcvpSupportedHostShapesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilter">DataOciOcvpSupportedHostShapesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.initialHostShapeNameInput">initial_host_shape_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.isSingleHostSddcSupportedInput">is_single_host_sddc_supported_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.sddcTypeInput">sddc_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.initialHostShapeName">initial_host_shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.isSingleHostSddcSupported">is_single_host_sddc_supported</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.sddcType">sddc_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.filter"></a>

```python
filter: DataOciOcvpSupportedHostShapesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList">DataOciOcvpSupportedHostShapesFilterList</a>

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.items"></a>

```python
items: DataOciOcvpSupportedHostShapesItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList">DataOciOcvpSupportedHostShapesItemsList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOcvpSupportedHostShapesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilter">DataOciOcvpSupportedHostShapesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `initial_host_shape_name_input`<sup>Optional</sup> <a name="initial_host_shape_name_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.initialHostShapeNameInput"></a>

```python
initial_host_shape_name_input: str
```

- *Type:* str

---

##### `is_single_host_sddc_supported_input`<sup>Optional</sup> <a name="is_single_host_sddc_supported_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.isSingleHostSddcSupportedInput"></a>

```python
is_single_host_sddc_supported_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `sddc_type_input`<sup>Optional</sup> <a name="sddc_type_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.sddcTypeInput"></a>

```python
sddc_type_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `initial_host_shape_name`<sup>Required</sup> <a name="initial_host_shape_name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.initialHostShapeName"></a>

```python
initial_host_shape_name: str
```

- *Type:* str

---

##### `is_single_host_sddc_supported`<sup>Required</sup> <a name="is_single_host_sddc_supported" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.isSingleHostSddcSupported"></a>

```python
is_single_host_sddc_supported: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sddc_type`<sup>Required</sup> <a name="sddc_type" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.sddcType"></a>

```python
sddc_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOcvpSupportedHostShapesConfig <a name="DataOciOcvpSupportedHostShapesConfig" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_supported_host_shapes

dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOcvpSupportedHostShapesFilter]] = None,
  id: str = None,
  initial_host_shape_name: str = None,
  is_single_host_sddc_supported: typing.Union[bool, IResolvable] = None,
  name: str = None,
  sddc_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#compartment_id DataOciOcvpSupportedHostShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilter">DataOciOcvpSupportedHostShapesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#id DataOciOcvpSupportedHostShapes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.initialHostShapeName">initial_host_shape_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#initial_host_shape_name DataOciOcvpSupportedHostShapes#initial_host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.isSingleHostSddcSupported">is_single_host_sddc_supported</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#is_single_host_sddc_supported DataOciOcvpSupportedHostShapes#is_single_host_sddc_supported}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#name DataOciOcvpSupportedHostShapes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.sddcType">sddc_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#sddc_type DataOciOcvpSupportedHostShapes#sddc_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#compartment_id DataOciOcvpSupportedHostShapes#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOcvpSupportedHostShapesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilter">DataOciOcvpSupportedHostShapesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#filter DataOciOcvpSupportedHostShapes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#id DataOciOcvpSupportedHostShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_host_shape_name`<sup>Optional</sup> <a name="initial_host_shape_name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.initialHostShapeName"></a>

```python
initial_host_shape_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#initial_host_shape_name DataOciOcvpSupportedHostShapes#initial_host_shape_name}.

---

##### `is_single_host_sddc_supported`<sup>Optional</sup> <a name="is_single_host_sddc_supported" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.isSingleHostSddcSupported"></a>

```python
is_single_host_sddc_supported: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#is_single_host_sddc_supported DataOciOcvpSupportedHostShapes#is_single_host_sddc_supported}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#name DataOciOcvpSupportedHostShapes#name}.

---

##### `sddc_type`<sup>Optional</sup> <a name="sddc_type" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.sddcType"></a>

```python
sddc_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#sddc_type DataOciOcvpSupportedHostShapes#sddc_type}.

---

### DataOciOcvpSupportedHostShapesFilter <a name="DataOciOcvpSupportedHostShapesFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_supported_host_shapes

dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#name DataOciOcvpSupportedHostShapes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#values DataOciOcvpSupportedHostShapes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#regex DataOciOcvpSupportedHostShapes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#name DataOciOcvpSupportedHostShapes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#values DataOciOcvpSupportedHostShapes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#regex DataOciOcvpSupportedHostShapes#regex}.

---

### DataOciOcvpSupportedHostShapesItems <a name="DataOciOcvpSupportedHostShapesItems" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_supported_host_shapes

dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOcvpSupportedHostShapesFilterList <a name="DataOciOcvpSupportedHostShapesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_supported_host_shapes

dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOcvpSupportedHostShapesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilter">DataOciOcvpSupportedHostShapesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOcvpSupportedHostShapesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilter">DataOciOcvpSupportedHostShapesFilter</a>]]

---


### DataOciOcvpSupportedHostShapesFilterOutputReference <a name="DataOciOcvpSupportedHostShapesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_supported_host_shapes

dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilter">DataOciOcvpSupportedHostShapesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOcvpSupportedHostShapesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilter">DataOciOcvpSupportedHostShapesFilter</a>]

---


### DataOciOcvpSupportedHostShapesItemsList <a name="DataOciOcvpSupportedHostShapesItemsList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_supported_host_shapes

dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOcvpSupportedHostShapesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOcvpSupportedHostShapesItemsOutputReference <a name="DataOciOcvpSupportedHostShapesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_supported_host_shapes

dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.defaultOcpuCount">default_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.isSingleHostSddcSupported">is_single_host_sddc_supported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.isSupportMonthlyCommitment">is_support_monthly_commitment</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.isSupportMonthlySku">is_support_monthly_sku</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.isSupportShieldedInstances">is_support_shielded_instances</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.shapeFamily">shape_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.supportedOcpuCount">supported_ocpu_count</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.supportedOperations">supported_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.supportedSddcTypes">supported_sddc_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.supportedVmwareSoftwareVersions">supported_vmware_software_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItems">DataOciOcvpSupportedHostShapesItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_ocpu_count`<sup>Required</sup> <a name="default_ocpu_count" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.defaultOcpuCount"></a>

```python
default_ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `is_single_host_sddc_supported`<sup>Required</sup> <a name="is_single_host_sddc_supported" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.isSingleHostSddcSupported"></a>

```python
is_single_host_sddc_supported: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_support_monthly_commitment`<sup>Required</sup> <a name="is_support_monthly_commitment" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.isSupportMonthlyCommitment"></a>

```python
is_support_monthly_commitment: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_support_monthly_sku`<sup>Required</sup> <a name="is_support_monthly_sku" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.isSupportMonthlySku"></a>

```python
is_support_monthly_sku: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_support_shielded_instances`<sup>Required</sup> <a name="is_support_shielded_instances" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.isSupportShieldedInstances"></a>

```python
is_support_shielded_instances: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `shape_family`<sup>Required</sup> <a name="shape_family" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.shapeFamily"></a>

```python
shape_family: str
```

- *Type:* str

---

##### `supported_ocpu_count`<sup>Required</sup> <a name="supported_ocpu_count" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.supportedOcpuCount"></a>

```python
supported_ocpu_count: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `supported_operations`<sup>Required</sup> <a name="supported_operations" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.supportedOperations"></a>

```python
supported_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_sddc_types`<sup>Required</sup> <a name="supported_sddc_types" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.supportedSddcTypes"></a>

```python
supported_sddc_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_vmware_software_versions`<sup>Required</sup> <a name="supported_vmware_software_versions" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.supportedVmwareSoftwareVersions"></a>

```python
supported_vmware_software_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOcvpSupportedHostShapesItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItems">DataOciOcvpSupportedHostShapesItems</a>

---



