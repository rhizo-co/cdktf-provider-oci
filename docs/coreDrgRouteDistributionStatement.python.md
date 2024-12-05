# `coreDrgRouteDistributionStatement` Submodule <a name="`coreDrgRouteDistributionStatement` Submodule" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreDrgRouteDistributionStatement <a name="CoreDrgRouteDistributionStatement" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement oci_core_drg_route_distribution_statement}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_drg_route_distribution_statement

coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  drg_route_distribution_id: str,
  match_criteria: CoreDrgRouteDistributionStatementMatchCriteria,
  priority: typing.Union[int, float],
  id: str = None,
  timeouts: CoreDrgRouteDistributionStatementTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#action CoreDrgRouteDistributionStatement#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.drgRouteDistributionId">drg_route_distribution_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#drg_route_distribution_id CoreDrgRouteDistributionStatement#drg_route_distribution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.matchCriteria">match_criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria">CoreDrgRouteDistributionStatementMatchCriteria</a></code> | match_criteria block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#priority CoreDrgRouteDistributionStatement#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#id CoreDrgRouteDistributionStatement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts">CoreDrgRouteDistributionStatementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#action CoreDrgRouteDistributionStatement#action}.

---

##### `drg_route_distribution_id`<sup>Required</sup> <a name="drg_route_distribution_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.drgRouteDistributionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#drg_route_distribution_id CoreDrgRouteDistributionStatement#drg_route_distribution_id}.

---

##### `match_criteria`<sup>Required</sup> <a name="match_criteria" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.matchCriteria"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria">CoreDrgRouteDistributionStatementMatchCriteria</a>

match_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#match_criteria CoreDrgRouteDistributionStatement#match_criteria}

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#priority CoreDrgRouteDistributionStatement#priority}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#id CoreDrgRouteDistributionStatement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts">CoreDrgRouteDistributionStatementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#timeouts CoreDrgRouteDistributionStatement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.putMatchCriteria">put_match_criteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_match_criteria` <a name="put_match_criteria" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.putMatchCriteria"></a>

```python
def put_match_criteria(
  attachment_type: str = None,
  drg_attachment_id: str = None,
  match_type: str = None
) -> None
```

###### `attachment_type`<sup>Optional</sup> <a name="attachment_type" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.putMatchCriteria.parameter.attachmentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#attachment_type CoreDrgRouteDistributionStatement#attachment_type}.

---

###### `drg_attachment_id`<sup>Optional</sup> <a name="drg_attachment_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.putMatchCriteria.parameter.drgAttachmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#drg_attachment_id CoreDrgRouteDistributionStatement#drg_attachment_id}.

---

###### `match_type`<sup>Optional</sup> <a name="match_type" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.putMatchCriteria.parameter.matchType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#match_type CoreDrgRouteDistributionStatement#match_type}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#create CoreDrgRouteDistributionStatement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#delete CoreDrgRouteDistributionStatement#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#update CoreDrgRouteDistributionStatement#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CoreDrgRouteDistributionStatement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import core_drg_route_distribution_statement

coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import core_drg_route_distribution_statement

coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import core_drg_route_distribution_statement

coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import core_drg_route_distribution_statement

coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CoreDrgRouteDistributionStatement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CoreDrgRouteDistributionStatement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CoreDrgRouteDistributionStatement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreDrgRouteDistributionStatement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.matchCriteria">match_criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference">CoreDrgRouteDistributionStatementMatchCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference">CoreDrgRouteDistributionStatementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.drgRouteDistributionIdInput">drg_route_distribution_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.matchCriteriaInput">match_criteria_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria">CoreDrgRouteDistributionStatementMatchCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts">CoreDrgRouteDistributionStatementTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.drgRouteDistributionId">drg_route_distribution_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `match_criteria`<sup>Required</sup> <a name="match_criteria" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.matchCriteria"></a>

```python
match_criteria: CoreDrgRouteDistributionStatementMatchCriteriaOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference">CoreDrgRouteDistributionStatementMatchCriteriaOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.timeouts"></a>

```python
timeouts: CoreDrgRouteDistributionStatementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference">CoreDrgRouteDistributionStatementTimeoutsOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `drg_route_distribution_id_input`<sup>Optional</sup> <a name="drg_route_distribution_id_input" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.drgRouteDistributionIdInput"></a>

```python
drg_route_distribution_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `match_criteria_input`<sup>Optional</sup> <a name="match_criteria_input" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.matchCriteriaInput"></a>

```python
match_criteria_input: CoreDrgRouteDistributionStatementMatchCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria">CoreDrgRouteDistributionStatementMatchCriteria</a>

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CoreDrgRouteDistributionStatementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts">CoreDrgRouteDistributionStatementTimeouts</a>]

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `drg_route_distribution_id`<sup>Required</sup> <a name="drg_route_distribution_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.drgRouteDistributionId"></a>

```python
drg_route_distribution_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CoreDrgRouteDistributionStatementConfig <a name="CoreDrgRouteDistributionStatementConfig" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_drg_route_distribution_statement

coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  drg_route_distribution_id: str,
  match_criteria: CoreDrgRouteDistributionStatementMatchCriteria,
  priority: typing.Union[int, float],
  id: str = None,
  timeouts: CoreDrgRouteDistributionStatementTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#action CoreDrgRouteDistributionStatement#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.drgRouteDistributionId">drg_route_distribution_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#drg_route_distribution_id CoreDrgRouteDistributionStatement#drg_route_distribution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.matchCriteria">match_criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria">CoreDrgRouteDistributionStatementMatchCriteria</a></code> | match_criteria block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#priority CoreDrgRouteDistributionStatement#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#id CoreDrgRouteDistributionStatement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts">CoreDrgRouteDistributionStatementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#action CoreDrgRouteDistributionStatement#action}.

---

##### `drg_route_distribution_id`<sup>Required</sup> <a name="drg_route_distribution_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.drgRouteDistributionId"></a>

```python
drg_route_distribution_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#drg_route_distribution_id CoreDrgRouteDistributionStatement#drg_route_distribution_id}.

---

##### `match_criteria`<sup>Required</sup> <a name="match_criteria" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.matchCriteria"></a>

```python
match_criteria: CoreDrgRouteDistributionStatementMatchCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria">CoreDrgRouteDistributionStatementMatchCriteria</a>

match_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#match_criteria CoreDrgRouteDistributionStatement#match_criteria}

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#priority CoreDrgRouteDistributionStatement#priority}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#id CoreDrgRouteDistributionStatement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.timeouts"></a>

```python
timeouts: CoreDrgRouteDistributionStatementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts">CoreDrgRouteDistributionStatementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#timeouts CoreDrgRouteDistributionStatement#timeouts}

---

### CoreDrgRouteDistributionStatementMatchCriteria <a name="CoreDrgRouteDistributionStatementMatchCriteria" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_drg_route_distribution_statement

coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria(
  attachment_type: str = None,
  drg_attachment_id: str = None,
  match_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria.property.attachmentType">attachment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#attachment_type CoreDrgRouteDistributionStatement#attachment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria.property.drgAttachmentId">drg_attachment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#drg_attachment_id CoreDrgRouteDistributionStatement#drg_attachment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria.property.matchType">match_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#match_type CoreDrgRouteDistributionStatement#match_type}. |

---

##### `attachment_type`<sup>Optional</sup> <a name="attachment_type" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria.property.attachmentType"></a>

```python
attachment_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#attachment_type CoreDrgRouteDistributionStatement#attachment_type}.

---

##### `drg_attachment_id`<sup>Optional</sup> <a name="drg_attachment_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria.property.drgAttachmentId"></a>

```python
drg_attachment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#drg_attachment_id CoreDrgRouteDistributionStatement#drg_attachment_id}.

---

##### `match_type`<sup>Optional</sup> <a name="match_type" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria.property.matchType"></a>

```python
match_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#match_type CoreDrgRouteDistributionStatement#match_type}.

---

### CoreDrgRouteDistributionStatementTimeouts <a name="CoreDrgRouteDistributionStatementTimeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_drg_route_distribution_statement

coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#create CoreDrgRouteDistributionStatement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#delete CoreDrgRouteDistributionStatement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#update CoreDrgRouteDistributionStatement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#create CoreDrgRouteDistributionStatement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#delete CoreDrgRouteDistributionStatement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#update CoreDrgRouteDistributionStatement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreDrgRouteDistributionStatementMatchCriteriaOutputReference <a name="CoreDrgRouteDistributionStatementMatchCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_drg_route_distribution_statement

coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.resetAttachmentType">reset_attachment_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.resetDrgAttachmentId">reset_drg_attachment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.resetMatchType">reset_match_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attachment_type` <a name="reset_attachment_type" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.resetAttachmentType"></a>

```python
def reset_attachment_type() -> None
```

##### `reset_drg_attachment_id` <a name="reset_drg_attachment_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.resetDrgAttachmentId"></a>

```python
def reset_drg_attachment_id() -> None
```

##### `reset_match_type` <a name="reset_match_type" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.resetMatchType"></a>

```python
def reset_match_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.attachmentTypeInput">attachment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.drgAttachmentIdInput">drg_attachment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.matchTypeInput">match_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.attachmentType">attachment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.drgAttachmentId">drg_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.matchType">match_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria">CoreDrgRouteDistributionStatementMatchCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attachment_type_input`<sup>Optional</sup> <a name="attachment_type_input" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.attachmentTypeInput"></a>

```python
attachment_type_input: str
```

- *Type:* str

---

##### `drg_attachment_id_input`<sup>Optional</sup> <a name="drg_attachment_id_input" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.drgAttachmentIdInput"></a>

```python
drg_attachment_id_input: str
```

- *Type:* str

---

##### `match_type_input`<sup>Optional</sup> <a name="match_type_input" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.matchTypeInput"></a>

```python
match_type_input: str
```

- *Type:* str

---

##### `attachment_type`<sup>Required</sup> <a name="attachment_type" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.attachmentType"></a>

```python
attachment_type: str
```

- *Type:* str

---

##### `drg_attachment_id`<sup>Required</sup> <a name="drg_attachment_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.drgAttachmentId"></a>

```python
drg_attachment_id: str
```

- *Type:* str

---

##### `match_type`<sup>Required</sup> <a name="match_type" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.matchType"></a>

```python
match_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: CoreDrgRouteDistributionStatementMatchCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria">CoreDrgRouteDistributionStatementMatchCriteria</a>

---


### CoreDrgRouteDistributionStatementTimeoutsOutputReference <a name="CoreDrgRouteDistributionStatementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_drg_route_distribution_statement

coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts">CoreDrgRouteDistributionStatementTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreDrgRouteDistributionStatementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts">CoreDrgRouteDistributionStatementTimeouts</a>]

---



