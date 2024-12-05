# `dataOciHealthChecksVantagePoints` Submodule <a name="`dataOciHealthChecksVantagePoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciHealthChecksVantagePoints <a name="DataOciHealthChecksVantagePoints" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points oci_health_checks_vantage_points}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_vantage_points

dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints(
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
  filter: typing.Union[IResolvable, typing.List[DataOciHealthChecksVantagePointsFilter]] = None,
  id: str = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#display_name DataOciHealthChecksVantagePoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter">DataOciHealthChecksVantagePointsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#id DataOciHealthChecksVantagePoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#name DataOciHealthChecksVantagePoints#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#display_name DataOciHealthChecksVantagePoints#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter">DataOciHealthChecksVantagePointsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#filter DataOciHealthChecksVantagePoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#id DataOciHealthChecksVantagePoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#name DataOciHealthChecksVantagePoints#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciHealthChecksVantagePointsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter">DataOciHealthChecksVantagePointsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciHealthChecksVantagePoints resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_vantage_points

dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_vantage_points

dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_vantage_points

dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_vantage_points

dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciHealthChecksVantagePoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciHealthChecksVantagePoints to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciHealthChecksVantagePoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciHealthChecksVantagePoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList">DataOciHealthChecksVantagePointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.healthChecksVantagePoints">health_checks_vantage_points</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList">DataOciHealthChecksVantagePointsHealthChecksVantagePointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter">DataOciHealthChecksVantagePointsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.filter"></a>

```python
filter: DataOciHealthChecksVantagePointsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList">DataOciHealthChecksVantagePointsFilterList</a>

---

##### `health_checks_vantage_points`<sup>Required</sup> <a name="health_checks_vantage_points" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.healthChecksVantagePoints"></a>

```python
health_checks_vantage_points: DataOciHealthChecksVantagePointsHealthChecksVantagePointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList">DataOciHealthChecksVantagePointsHealthChecksVantagePointsList</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciHealthChecksVantagePointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter">DataOciHealthChecksVantagePointsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciHealthChecksVantagePointsConfig <a name="DataOciHealthChecksVantagePointsConfig" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_vantage_points

dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciHealthChecksVantagePointsFilter]] = None,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#display_name DataOciHealthChecksVantagePoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter">DataOciHealthChecksVantagePointsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#id DataOciHealthChecksVantagePoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#name DataOciHealthChecksVantagePoints#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#display_name DataOciHealthChecksVantagePoints#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciHealthChecksVantagePointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter">DataOciHealthChecksVantagePointsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#filter DataOciHealthChecksVantagePoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#id DataOciHealthChecksVantagePoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#name DataOciHealthChecksVantagePoints#name}.

---

### DataOciHealthChecksVantagePointsFilter <a name="DataOciHealthChecksVantagePointsFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_vantage_points

dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#name DataOciHealthChecksVantagePoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#values DataOciHealthChecksVantagePoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#regex DataOciHealthChecksVantagePoints#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#name DataOciHealthChecksVantagePoints#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#values DataOciHealthChecksVantagePoints#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#regex DataOciHealthChecksVantagePoints#regex}.

---

### DataOciHealthChecksVantagePointsHealthChecksVantagePoints <a name="DataOciHealthChecksVantagePointsHealthChecksVantagePoints" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePoints.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_vantage_points

dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePoints()
```


### DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo <a name="DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_vantage_points

dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo()
```


### DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting <a name="DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_vantage_points

dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciHealthChecksVantagePointsFilterList <a name="DataOciHealthChecksVantagePointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_vantage_points

dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciHealthChecksVantagePointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter">DataOciHealthChecksVantagePointsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciHealthChecksVantagePointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter">DataOciHealthChecksVantagePointsFilter</a>]]

---


### DataOciHealthChecksVantagePointsFilterOutputReference <a name="DataOciHealthChecksVantagePointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_vantage_points

dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter">DataOciHealthChecksVantagePointsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciHealthChecksVantagePointsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter">DataOciHealthChecksVantagePointsFilter</a>]

---


### DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList <a name="DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_vantage_points

dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference <a name="DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_vantage_points

dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.adminDivCode">admin_div_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.cityName">city_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.countryName">country_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.geoKey">geo_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.latitude">latitude</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.longitude">longitude</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo">DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_div_code`<sup>Required</sup> <a name="admin_div_code" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.adminDivCode"></a>

```python
admin_div_code: str
```

- *Type:* str

---

##### `city_name`<sup>Required</sup> <a name="city_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.cityName"></a>

```python
city_name: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `country_name`<sup>Required</sup> <a name="country_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.countryName"></a>

```python
country_name: str
```

- *Type:* str

---

##### `geo_key`<sup>Required</sup> <a name="geo_key" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.geoKey"></a>

```python
geo_key: str
```

- *Type:* str

---

##### `latitude`<sup>Required</sup> <a name="latitude" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.latitude"></a>

```python
latitude: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `longitude`<sup>Required</sup> <a name="longitude" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.longitude"></a>

```python
longitude: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.internalValue"></a>

```python
internal_value: DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo">DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo</a>

---


### DataOciHealthChecksVantagePointsHealthChecksVantagePointsList <a name="DataOciHealthChecksVantagePointsHealthChecksVantagePointsList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_vantage_points

dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference <a name="DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_vantage_points

dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.geo">geo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList">DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.routing">routing</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList">DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePoints">DataOciHealthChecksVantagePointsHealthChecksVantagePoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `geo`<sup>Required</sup> <a name="geo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.geo"></a>

```python
geo: DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList">DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `routing`<sup>Required</sup> <a name="routing" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.routing"></a>

```python
routing: DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList">DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciHealthChecksVantagePointsHealthChecksVantagePoints
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePoints">DataOciHealthChecksVantagePointsHealthChecksVantagePoints</a>

---


### DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList <a name="DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_vantage_points

dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference <a name="DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_vantage_points

dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.asLabel">as_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting">DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `as_label`<sup>Required</sup> <a name="as_label" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.asLabel"></a>

```python
as_label: str
```

- *Type:* str

---

##### `asn`<sup>Required</sup> <a name="asn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.internalValue"></a>

```python
internal_value: DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting">DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting</a>

---



