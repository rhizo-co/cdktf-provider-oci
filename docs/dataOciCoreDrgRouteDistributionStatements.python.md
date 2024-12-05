# `dataOciCoreDrgRouteDistributionStatements` Submodule <a name="`dataOciCoreDrgRouteDistributionStatements` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreDrgRouteDistributionStatements <a name="DataOciCoreDrgRouteDistributionStatements" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements oci_core_drg_route_distribution_statements}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_distribution_statements

dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  drg_route_distribution_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreDrgRouteDistributionStatementsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.drgRouteDistributionId">drg_route_distribution_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#drg_route_distribution_id DataOciCoreDrgRouteDistributionStatements#drg_route_distribution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter">DataOciCoreDrgRouteDistributionStatementsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#id DataOciCoreDrgRouteDistributionStatements#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `drg_route_distribution_id`<sup>Required</sup> <a name="drg_route_distribution_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.drgRouteDistributionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#drg_route_distribution_id DataOciCoreDrgRouteDistributionStatements#drg_route_distribution_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter">DataOciCoreDrgRouteDistributionStatementsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#filter DataOciCoreDrgRouteDistributionStatements#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#id DataOciCoreDrgRouteDistributionStatements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreDrgRouteDistributionStatementsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter">DataOciCoreDrgRouteDistributionStatementsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreDrgRouteDistributionStatements resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_distribution_statements

dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_distribution_statements

dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_distribution_statements

dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_distribution_statements

dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreDrgRouteDistributionStatements resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreDrgRouteDistributionStatements to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreDrgRouteDistributionStatements that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreDrgRouteDistributionStatements to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.drgRouteDistributionStatements">drg_route_distribution_statements</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList">DataOciCoreDrgRouteDistributionStatementsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.drgRouteDistributionIdInput">drg_route_distribution_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter">DataOciCoreDrgRouteDistributionStatementsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.drgRouteDistributionId">drg_route_distribution_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `drg_route_distribution_statements`<sup>Required</sup> <a name="drg_route_distribution_statements" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.drgRouteDistributionStatements"></a>

```python
drg_route_distribution_statements: DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.filter"></a>

```python
filter: DataOciCoreDrgRouteDistributionStatementsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList">DataOciCoreDrgRouteDistributionStatementsFilterList</a>

---

##### `drg_route_distribution_id_input`<sup>Optional</sup> <a name="drg_route_distribution_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.drgRouteDistributionIdInput"></a>

```python
drg_route_distribution_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreDrgRouteDistributionStatementsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter">DataOciCoreDrgRouteDistributionStatementsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `drg_route_distribution_id`<sup>Required</sup> <a name="drg_route_distribution_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.drgRouteDistributionId"></a>

```python
drg_route_distribution_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreDrgRouteDistributionStatementsConfig <a name="DataOciCoreDrgRouteDistributionStatementsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_distribution_statements

dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  drg_route_distribution_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreDrgRouteDistributionStatementsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.drgRouteDistributionId">drg_route_distribution_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#drg_route_distribution_id DataOciCoreDrgRouteDistributionStatements#drg_route_distribution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter">DataOciCoreDrgRouteDistributionStatementsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#id DataOciCoreDrgRouteDistributionStatements#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `drg_route_distribution_id`<sup>Required</sup> <a name="drg_route_distribution_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.drgRouteDistributionId"></a>

```python
drg_route_distribution_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#drg_route_distribution_id DataOciCoreDrgRouteDistributionStatements#drg_route_distribution_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreDrgRouteDistributionStatementsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter">DataOciCoreDrgRouteDistributionStatementsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#filter DataOciCoreDrgRouteDistributionStatements#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#id DataOciCoreDrgRouteDistributionStatements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements <a name="DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_distribution_statements

dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements()
```


### DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria <a name="DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_distribution_statements

dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria()
```


### DataOciCoreDrgRouteDistributionStatementsFilter <a name="DataOciCoreDrgRouteDistributionStatementsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_distribution_statements

dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#name DataOciCoreDrgRouteDistributionStatements#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#values DataOciCoreDrgRouteDistributionStatements#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#regex DataOciCoreDrgRouteDistributionStatements#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#name DataOciCoreDrgRouteDistributionStatements#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#values DataOciCoreDrgRouteDistributionStatements#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#regex DataOciCoreDrgRouteDistributionStatements#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList <a name="DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_distribution_statements

dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList <a name="DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_distribution_statements

dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference <a name="DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_distribution_statements

dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.attachmentType">attachment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.drgAttachmentId">drg_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.matchType">match_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attachment_type`<sup>Required</sup> <a name="attachment_type" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.attachmentType"></a>

```python
attachment_type: str
```

- *Type:* str

---

##### `drg_attachment_id`<sup>Required</sup> <a name="drg_attachment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.drgAttachmentId"></a>

```python
drg_attachment_id: str
```

- *Type:* str

---

##### `match_type`<sup>Required</sup> <a name="match_type" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.matchType"></a>

```python
match_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria</a>

---


### DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference <a name="DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_distribution_statements

dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.matchCriteria">match_criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `match_criteria`<sup>Required</sup> <a name="match_criteria" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.matchCriteria"></a>

```python
match_criteria: DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList</a>

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements</a>

---


### DataOciCoreDrgRouteDistributionStatementsFilterList <a name="DataOciCoreDrgRouteDistributionStatementsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_distribution_statements

dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreDrgRouteDistributionStatementsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter">DataOciCoreDrgRouteDistributionStatementsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreDrgRouteDistributionStatementsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter">DataOciCoreDrgRouteDistributionStatementsFilter</a>]]

---


### DataOciCoreDrgRouteDistributionStatementsFilterOutputReference <a name="DataOciCoreDrgRouteDistributionStatementsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_drg_route_distribution_statements

dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter">DataOciCoreDrgRouteDistributionStatementsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreDrgRouteDistributionStatementsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter">DataOciCoreDrgRouteDistributionStatementsFilter</a>]

---



