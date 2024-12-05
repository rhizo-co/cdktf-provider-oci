# `dataOciCoreDrgRouteTableRouteRules` Submodule <a name="`dataOciCoreDrgRouteTableRouteRules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreDrgRouteTableRouteRules <a name="DataOciCoreDrgRouteTableRouteRules" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules oci_core_drg_route_table_route_rules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_table_route_rules

dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  drg_route_table_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreDrgRouteTableRouteRulesFilter]] = None,
  id: str = None,
  route_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.drgRouteTableId">drg_route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#drg_route_table_id DataOciCoreDrgRouteTableRouteRules#drg_route_table_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter">DataOciCoreDrgRouteTableRouteRulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#id DataOciCoreDrgRouteTableRouteRules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.routeType">route_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#route_type DataOciCoreDrgRouteTableRouteRules#route_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `drg_route_table_id`<sup>Required</sup> <a name="drg_route_table_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.drgRouteTableId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#drg_route_table_id DataOciCoreDrgRouteTableRouteRules#drg_route_table_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter">DataOciCoreDrgRouteTableRouteRulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#filter DataOciCoreDrgRouteTableRouteRules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#id DataOciCoreDrgRouteTableRouteRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `route_type`<sup>Optional</sup> <a name="route_type" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.routeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#route_type DataOciCoreDrgRouteTableRouteRules#route_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.resetRouteType">reset_route_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreDrgRouteTableRouteRulesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter">DataOciCoreDrgRouteTableRouteRulesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_route_type` <a name="reset_route_type" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.resetRouteType"></a>

```python
def reset_route_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreDrgRouteTableRouteRules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_table_route_rules

dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_table_route_rules

dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_table_route_rules

dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_table_route_rules

dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreDrgRouteTableRouteRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreDrgRouteTableRouteRules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreDrgRouteTableRouteRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreDrgRouteTableRouteRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.drgRouteRules">drg_route_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList">DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList">DataOciCoreDrgRouteTableRouteRulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.drgRouteTableIdInput">drg_route_table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter">DataOciCoreDrgRouteTableRouteRulesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.routeTypeInput">route_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.drgRouteTableId">drg_route_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.routeType">route_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `drg_route_rules`<sup>Required</sup> <a name="drg_route_rules" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.drgRouteRules"></a>

```python
drg_route_rules: DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList">DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.filter"></a>

```python
filter: DataOciCoreDrgRouteTableRouteRulesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList">DataOciCoreDrgRouteTableRouteRulesFilterList</a>

---

##### `drg_route_table_id_input`<sup>Optional</sup> <a name="drg_route_table_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.drgRouteTableIdInput"></a>

```python
drg_route_table_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreDrgRouteTableRouteRulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter">DataOciCoreDrgRouteTableRouteRulesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `route_type_input`<sup>Optional</sup> <a name="route_type_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.routeTypeInput"></a>

```python
route_type_input: str
```

- *Type:* str

---

##### `drg_route_table_id`<sup>Required</sup> <a name="drg_route_table_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.drgRouteTableId"></a>

```python
drg_route_table_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `route_type`<sup>Required</sup> <a name="route_type" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.routeType"></a>

```python
route_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreDrgRouteTableRouteRulesConfig <a name="DataOciCoreDrgRouteTableRouteRulesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_table_route_rules

dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  drg_route_table_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreDrgRouteTableRouteRulesFilter]] = None,
  id: str = None,
  route_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.drgRouteTableId">drg_route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#drg_route_table_id DataOciCoreDrgRouteTableRouteRules#drg_route_table_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter">DataOciCoreDrgRouteTableRouteRulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#id DataOciCoreDrgRouteTableRouteRules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.routeType">route_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#route_type DataOciCoreDrgRouteTableRouteRules#route_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `drg_route_table_id`<sup>Required</sup> <a name="drg_route_table_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.drgRouteTableId"></a>

```python
drg_route_table_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#drg_route_table_id DataOciCoreDrgRouteTableRouteRules#drg_route_table_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreDrgRouteTableRouteRulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter">DataOciCoreDrgRouteTableRouteRulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#filter DataOciCoreDrgRouteTableRouteRules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#id DataOciCoreDrgRouteTableRouteRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `route_type`<sup>Optional</sup> <a name="route_type" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.routeType"></a>

```python
route_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#route_type DataOciCoreDrgRouteTableRouteRules#route_type}.

---

### DataOciCoreDrgRouteTableRouteRulesDrgRouteRules <a name="DataOciCoreDrgRouteTableRouteRulesDrgRouteRules" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_table_route_rules

dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRules()
```


### DataOciCoreDrgRouteTableRouteRulesFilter <a name="DataOciCoreDrgRouteTableRouteRulesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_table_route_rules

dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#name DataOciCoreDrgRouteTableRouteRules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#values DataOciCoreDrgRouteTableRouteRules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#regex DataOciCoreDrgRouteTableRouteRules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#name DataOciCoreDrgRouteTableRouteRules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#values DataOciCoreDrgRouteTableRouteRules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#regex DataOciCoreDrgRouteTableRouteRules#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList <a name="DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_table_route_rules

dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference <a name="DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_table_route_rules

dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.attributes">attributes</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.destinationType">destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.isBlackhole">is_blackhole</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.isConflict">is_conflict</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.nextHopDrgAttachmentId">next_hop_drg_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.routeProvenance">route_provenance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.routeType">route_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRules">DataOciCoreDrgRouteTableRouteRulesDrgRouteRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.attributes"></a>

```python
attributes: StringMap
```

- *Type:* cdktf.StringMap

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_blackhole`<sup>Required</sup> <a name="is_blackhole" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.isBlackhole"></a>

```python
is_blackhole: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_conflict`<sup>Required</sup> <a name="is_conflict" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.isConflict"></a>

```python
is_conflict: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `next_hop_drg_attachment_id`<sup>Required</sup> <a name="next_hop_drg_attachment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.nextHopDrgAttachmentId"></a>

```python
next_hop_drg_attachment_id: str
```

- *Type:* str

---

##### `route_provenance`<sup>Required</sup> <a name="route_provenance" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.routeProvenance"></a>

```python
route_provenance: str
```

- *Type:* str

---

##### `route_type`<sup>Required</sup> <a name="route_type" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.routeType"></a>

```python
route_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreDrgRouteTableRouteRulesDrgRouteRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRules">DataOciCoreDrgRouteTableRouteRulesDrgRouteRules</a>

---


### DataOciCoreDrgRouteTableRouteRulesFilterList <a name="DataOciCoreDrgRouteTableRouteRulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_table_route_rules

dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreDrgRouteTableRouteRulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter">DataOciCoreDrgRouteTableRouteRulesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreDrgRouteTableRouteRulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter">DataOciCoreDrgRouteTableRouteRulesFilter</a>]]

---


### DataOciCoreDrgRouteTableRouteRulesFilterOutputReference <a name="DataOciCoreDrgRouteTableRouteRulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_table_route_rules

dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter">DataOciCoreDrgRouteTableRouteRulesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreDrgRouteTableRouteRulesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter">DataOciCoreDrgRouteTableRouteRulesFilter</a>]

---



