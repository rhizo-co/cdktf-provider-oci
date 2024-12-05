# `dataOciCoreDrgRouteTables` Submodule <a name="`dataOciCoreDrgRouteTables` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreDrgRouteTables <a name="DataOciCoreDrgRouteTables" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables oci_core_drg_route_tables}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_tables

dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  drg_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreDrgRouteTablesFilter]] = None,
  id: str = None,
  import_drg_route_distribution_id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.drgId">drg_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#drg_id DataOciCoreDrgRouteTables#drg_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#display_name DataOciCoreDrgRouteTables#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter">DataOciCoreDrgRouteTablesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#id DataOciCoreDrgRouteTables#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.importDrgRouteDistributionId">import_drg_route_distribution_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#import_drg_route_distribution_id DataOciCoreDrgRouteTables#import_drg_route_distribution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#state DataOciCoreDrgRouteTables#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `drg_id`<sup>Required</sup> <a name="drg_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.drgId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#drg_id DataOciCoreDrgRouteTables#drg_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#display_name DataOciCoreDrgRouteTables#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter">DataOciCoreDrgRouteTablesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#filter DataOciCoreDrgRouteTables#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#id DataOciCoreDrgRouteTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import_drg_route_distribution_id`<sup>Optional</sup> <a name="import_drg_route_distribution_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.importDrgRouteDistributionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#import_drg_route_distribution_id DataOciCoreDrgRouteTables#import_drg_route_distribution_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#state DataOciCoreDrgRouteTables#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.resetImportDrgRouteDistributionId">reset_import_drg_route_distribution_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreDrgRouteTablesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter">DataOciCoreDrgRouteTablesFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_import_drg_route_distribution_id` <a name="reset_import_drg_route_distribution_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.resetImportDrgRouteDistributionId"></a>

```python
def reset_import_drg_route_distribution_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreDrgRouteTables resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_tables

dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_tables

dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_tables

dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_tables

dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreDrgRouteTables resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreDrgRouteTables to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreDrgRouteTables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreDrgRouteTables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.drgRouteTables">drg_route_tables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList">DataOciCoreDrgRouteTablesDrgRouteTablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList">DataOciCoreDrgRouteTablesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.drgIdInput">drg_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter">DataOciCoreDrgRouteTablesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.importDrgRouteDistributionIdInput">import_drg_route_distribution_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.drgId">drg_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.importDrgRouteDistributionId">import_drg_route_distribution_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `drg_route_tables`<sup>Required</sup> <a name="drg_route_tables" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.drgRouteTables"></a>

```python
drg_route_tables: DataOciCoreDrgRouteTablesDrgRouteTablesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList">DataOciCoreDrgRouteTablesDrgRouteTablesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.filter"></a>

```python
filter: DataOciCoreDrgRouteTablesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList">DataOciCoreDrgRouteTablesFilterList</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `drg_id_input`<sup>Optional</sup> <a name="drg_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.drgIdInput"></a>

```python
drg_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreDrgRouteTablesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter">DataOciCoreDrgRouteTablesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `import_drg_route_distribution_id_input`<sup>Optional</sup> <a name="import_drg_route_distribution_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.importDrgRouteDistributionIdInput"></a>

```python
import_drg_route_distribution_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `drg_id`<sup>Required</sup> <a name="drg_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.drgId"></a>

```python
drg_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `import_drg_route_distribution_id`<sup>Required</sup> <a name="import_drg_route_distribution_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.importDrgRouteDistributionId"></a>

```python
import_drg_route_distribution_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreDrgRouteTablesConfig <a name="DataOciCoreDrgRouteTablesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_tables

dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  drg_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreDrgRouteTablesFilter]] = None,
  id: str = None,
  import_drg_route_distribution_id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.drgId">drg_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#drg_id DataOciCoreDrgRouteTables#drg_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#display_name DataOciCoreDrgRouteTables#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter">DataOciCoreDrgRouteTablesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#id DataOciCoreDrgRouteTables#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.importDrgRouteDistributionId">import_drg_route_distribution_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#import_drg_route_distribution_id DataOciCoreDrgRouteTables#import_drg_route_distribution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#state DataOciCoreDrgRouteTables#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `drg_id`<sup>Required</sup> <a name="drg_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.drgId"></a>

```python
drg_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#drg_id DataOciCoreDrgRouteTables#drg_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#display_name DataOciCoreDrgRouteTables#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreDrgRouteTablesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter">DataOciCoreDrgRouteTablesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#filter DataOciCoreDrgRouteTables#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#id DataOciCoreDrgRouteTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import_drg_route_distribution_id`<sup>Optional</sup> <a name="import_drg_route_distribution_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.importDrgRouteDistributionId"></a>

```python
import_drg_route_distribution_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#import_drg_route_distribution_id DataOciCoreDrgRouteTables#import_drg_route_distribution_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#state DataOciCoreDrgRouteTables#state}.

---

### DataOciCoreDrgRouteTablesDrgRouteTables <a name="DataOciCoreDrgRouteTablesDrgRouteTables" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTables.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_tables

dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTables()
```


### DataOciCoreDrgRouteTablesFilter <a name="DataOciCoreDrgRouteTablesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_tables

dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#name DataOciCoreDrgRouteTables#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#values DataOciCoreDrgRouteTables#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#regex DataOciCoreDrgRouteTables#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#name DataOciCoreDrgRouteTables#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#values DataOciCoreDrgRouteTables#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#regex DataOciCoreDrgRouteTables#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreDrgRouteTablesDrgRouteTablesList <a name="DataOciCoreDrgRouteTablesDrgRouteTablesList" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_tables

dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference <a name="DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_tables

dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.drgId">drg_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.importDrgRouteDistributionId">import_drg_route_distribution_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.isEcmpEnabled">is_ecmp_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.removeImportTrigger">remove_import_trigger</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTables">DataOciCoreDrgRouteTablesDrgRouteTables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `drg_id`<sup>Required</sup> <a name="drg_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.drgId"></a>

```python
drg_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `import_drg_route_distribution_id`<sup>Required</sup> <a name="import_drg_route_distribution_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.importDrgRouteDistributionId"></a>

```python
import_drg_route_distribution_id: str
```

- *Type:* str

---

##### `is_ecmp_enabled`<sup>Required</sup> <a name="is_ecmp_enabled" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.isEcmpEnabled"></a>

```python
is_ecmp_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `remove_import_trigger`<sup>Required</sup> <a name="remove_import_trigger" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.removeImportTrigger"></a>

```python
remove_import_trigger: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreDrgRouteTablesDrgRouteTables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTables">DataOciCoreDrgRouteTablesDrgRouteTables</a>

---


### DataOciCoreDrgRouteTablesFilterList <a name="DataOciCoreDrgRouteTablesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_tables

dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreDrgRouteTablesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter">DataOciCoreDrgRouteTablesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreDrgRouteTablesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter">DataOciCoreDrgRouteTablesFilter</a>]]

---


### DataOciCoreDrgRouteTablesFilterOutputReference <a name="DataOciCoreDrgRouteTablesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_tables

dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter">DataOciCoreDrgRouteTablesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreDrgRouteTablesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter">DataOciCoreDrgRouteTablesFilter</a>]

---



