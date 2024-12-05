# `loadBalancerRuleSet` Submodule <a name="`loadBalancerRuleSet` Submodule" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerRuleSet <a name="LoadBalancerRuleSet" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set oci_load_balancer_rule_set}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_rule_set

loadBalancerRuleSet.LoadBalancerRuleSet(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  items: typing.Union[IResolvable, typing.List[LoadBalancerRuleSetItems]],
  load_balancer_id: str,
  name: str,
  id: str = None,
  timeouts: LoadBalancerRuleSetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.items">items</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems">LoadBalancerRuleSetItems</a>]]</code> | items block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#load_balancer_id LoadBalancerRuleSet#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#name LoadBalancerRuleSet#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#id LoadBalancerRuleSet#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts">LoadBalancerRuleSetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.items"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems">LoadBalancerRuleSetItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#items LoadBalancerRuleSet#items}

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.loadBalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#load_balancer_id LoadBalancerRuleSet#load_balancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#name LoadBalancerRuleSet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#id LoadBalancerRuleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts">LoadBalancerRuleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#timeouts LoadBalancerRuleSet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.putItems">put_items</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_items` <a name="put_items" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.putItems"></a>

```python
def put_items(
  value: typing.Union[IResolvable, typing.List[LoadBalancerRuleSetItems]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.putItems.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems">LoadBalancerRuleSetItems</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#create LoadBalancerRuleSet#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#delete LoadBalancerRuleSet#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#update LoadBalancerRuleSet#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LoadBalancerRuleSet resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_rule_set

loadBalancerRuleSet.LoadBalancerRuleSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_rule_set

loadBalancerRuleSet.LoadBalancerRuleSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_rule_set

loadBalancerRuleSet.LoadBalancerRuleSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_rule_set

loadBalancerRuleSet.LoadBalancerRuleSet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LoadBalancerRuleSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LoadBalancerRuleSet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LoadBalancerRuleSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancerRuleSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList">LoadBalancerRuleSetItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference">LoadBalancerRuleSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.itemsInput">items_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems">LoadBalancerRuleSetItems</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.loadBalancerIdInput">load_balancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts">LoadBalancerRuleSetTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.items"></a>

```python
items: LoadBalancerRuleSetItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList">LoadBalancerRuleSetItemsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.timeouts"></a>

```python
timeouts: LoadBalancerRuleSetTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference">LoadBalancerRuleSetTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.itemsInput"></a>

```python
items_input: typing.Union[IResolvable, typing.List[LoadBalancerRuleSetItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems">LoadBalancerRuleSetItems</a>]]

---

##### `load_balancer_id_input`<sup>Optional</sup> <a name="load_balancer_id_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.loadBalancerIdInput"></a>

```python
load_balancer_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LoadBalancerRuleSetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts">LoadBalancerRuleSetTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerRuleSetConfig <a name="LoadBalancerRuleSetConfig" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_rule_set

loadBalancerRuleSet.LoadBalancerRuleSetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  items: typing.Union[IResolvable, typing.List[LoadBalancerRuleSetItems]],
  load_balancer_id: str,
  name: str,
  id: str = None,
  timeouts: LoadBalancerRuleSetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.items">items</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems">LoadBalancerRuleSetItems</a>]]</code> | items block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#load_balancer_id LoadBalancerRuleSet#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#name LoadBalancerRuleSet#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#id LoadBalancerRuleSet#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts">LoadBalancerRuleSetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.items"></a>

```python
items: typing.Union[IResolvable, typing.List[LoadBalancerRuleSetItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems">LoadBalancerRuleSetItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#items LoadBalancerRuleSet#items}

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#load_balancer_id LoadBalancerRuleSet#load_balancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#name LoadBalancerRuleSet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#id LoadBalancerRuleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.timeouts"></a>

```python
timeouts: LoadBalancerRuleSetTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts">LoadBalancerRuleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#timeouts LoadBalancerRuleSet#timeouts}

---

### LoadBalancerRuleSetItems <a name="LoadBalancerRuleSetItems" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_rule_set

loadBalancerRuleSet.LoadBalancerRuleSetItems(
  action: str,
  allowed_methods: typing.List[str] = None,
  are_invalid_characters_allowed: typing.Union[bool, IResolvable] = None,
  conditions: typing.Union[IResolvable, typing.List[LoadBalancerRuleSetItemsConditions]] = None,
  default_max_connections: typing.Union[int, float] = None,
  description: str = None,
  header: str = None,
  http_large_header_size_in_kb: typing.Union[int, float] = None,
  ip_max_connections: typing.Union[IResolvable, typing.List[LoadBalancerRuleSetItemsIpMaxConnections]] = None,
  prefix: str = None,
  redirect_uri: LoadBalancerRuleSetItemsRedirectUri = None,
  response_code: typing.Union[int, float] = None,
  status_code: typing.Union[int, float] = None,
  suffix: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#action LoadBalancerRuleSet#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#allowed_methods LoadBalancerRuleSet#allowed_methods}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.areInvalidCharactersAllowed">are_invalid_characters_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#are_invalid_characters_allowed LoadBalancerRuleSet#are_invalid_characters_allowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.conditions">conditions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions">LoadBalancerRuleSetItemsConditions</a>]]</code> | conditions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.defaultMaxConnections">default_max_connections</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#default_max_connections LoadBalancerRuleSet#default_max_connections}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#description LoadBalancerRuleSet#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.header">header</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#header LoadBalancerRuleSet#header}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.httpLargeHeaderSizeInKb">http_large_header_size_in_kb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#http_large_header_size_in_kb LoadBalancerRuleSet#http_large_header_size_in_kb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.ipMaxConnections">ip_max_connections</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections">LoadBalancerRuleSetItemsIpMaxConnections</a>]]</code> | ip_max_connections block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#prefix LoadBalancerRuleSet#prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.redirectUri">redirect_uri</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri">LoadBalancerRuleSetItemsRedirectUri</a></code> | redirect_uri block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.responseCode">response_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#response_code LoadBalancerRuleSet#response_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#status_code LoadBalancerRuleSet#status_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.suffix">suffix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#suffix LoadBalancerRuleSet#suffix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#value LoadBalancerRuleSet#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#action LoadBalancerRuleSet#action}.

---

##### `allowed_methods`<sup>Optional</sup> <a name="allowed_methods" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#allowed_methods LoadBalancerRuleSet#allowed_methods}.

---

##### `are_invalid_characters_allowed`<sup>Optional</sup> <a name="are_invalid_characters_allowed" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.areInvalidCharactersAllowed"></a>

```python
are_invalid_characters_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#are_invalid_characters_allowed LoadBalancerRuleSet#are_invalid_characters_allowed}.

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.conditions"></a>

```python
conditions: typing.Union[IResolvable, typing.List[LoadBalancerRuleSetItemsConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions">LoadBalancerRuleSetItemsConditions</a>]]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#conditions LoadBalancerRuleSet#conditions}

---

##### `default_max_connections`<sup>Optional</sup> <a name="default_max_connections" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.defaultMaxConnections"></a>

```python
default_max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#default_max_connections LoadBalancerRuleSet#default_max_connections}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#description LoadBalancerRuleSet#description}.

---

##### `header`<sup>Optional</sup> <a name="header" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.header"></a>

```python
header: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#header LoadBalancerRuleSet#header}.

---

##### `http_large_header_size_in_kb`<sup>Optional</sup> <a name="http_large_header_size_in_kb" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.httpLargeHeaderSizeInKb"></a>

```python
http_large_header_size_in_kb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#http_large_header_size_in_kb LoadBalancerRuleSet#http_large_header_size_in_kb}.

---

##### `ip_max_connections`<sup>Optional</sup> <a name="ip_max_connections" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.ipMaxConnections"></a>

```python
ip_max_connections: typing.Union[IResolvable, typing.List[LoadBalancerRuleSetItemsIpMaxConnections]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections">LoadBalancerRuleSetItemsIpMaxConnections</a>]]

ip_max_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#ip_max_connections LoadBalancerRuleSet#ip_max_connections}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#prefix LoadBalancerRuleSet#prefix}.

---

##### `redirect_uri`<sup>Optional</sup> <a name="redirect_uri" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.redirectUri"></a>

```python
redirect_uri: LoadBalancerRuleSetItemsRedirectUri
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri">LoadBalancerRuleSetItemsRedirectUri</a>

redirect_uri block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#redirect_uri LoadBalancerRuleSet#redirect_uri}

---

##### `response_code`<sup>Optional</sup> <a name="response_code" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.responseCode"></a>

```python
response_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#response_code LoadBalancerRuleSet#response_code}.

---

##### `status_code`<sup>Optional</sup> <a name="status_code" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#status_code LoadBalancerRuleSet#status_code}.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#suffix LoadBalancerRuleSet#suffix}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#value LoadBalancerRuleSet#value}.

---

### LoadBalancerRuleSetItemsConditions <a name="LoadBalancerRuleSetItemsConditions" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_rule_set

loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions(
  attribute_name: str,
  attribute_value: str,
  operator: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions.property.attributeName">attribute_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#attribute_name LoadBalancerRuleSet#attribute_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions.property.attributeValue">attribute_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#attribute_value LoadBalancerRuleSet#attribute_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#operator LoadBalancerRuleSet#operator}. |

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#attribute_name LoadBalancerRuleSet#attribute_name}.

---

##### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#attribute_value LoadBalancerRuleSet#attribute_value}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#operator LoadBalancerRuleSet#operator}.

---

### LoadBalancerRuleSetItemsIpMaxConnections <a name="LoadBalancerRuleSetItemsIpMaxConnections" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_rule_set

loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections(
  ip_addresses: typing.List[str] = None,
  max_connections: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#ip_addresses LoadBalancerRuleSet#ip_addresses}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections.property.maxConnections">max_connections</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#max_connections LoadBalancerRuleSet#max_connections}. |

---

##### `ip_addresses`<sup>Optional</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#ip_addresses LoadBalancerRuleSet#ip_addresses}.

---

##### `max_connections`<sup>Optional</sup> <a name="max_connections" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections.property.maxConnections"></a>

```python
max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#max_connections LoadBalancerRuleSet#max_connections}.

---

### LoadBalancerRuleSetItemsRedirectUri <a name="LoadBalancerRuleSetItemsRedirectUri" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_rule_set

loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri(
  host: str = None,
  path: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  query: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#host LoadBalancerRuleSet#host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#path LoadBalancerRuleSet#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#port LoadBalancerRuleSet#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#protocol LoadBalancerRuleSet#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri.property.query">query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#query LoadBalancerRuleSet#query}. |

---

##### `host`<sup>Optional</sup> <a name="host" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#host LoadBalancerRuleSet#host}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#path LoadBalancerRuleSet#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#port LoadBalancerRuleSet#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#protocol LoadBalancerRuleSet#protocol}.

---

##### `query`<sup>Optional</sup> <a name="query" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri.property.query"></a>

```python
query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#query LoadBalancerRuleSet#query}.

---

### LoadBalancerRuleSetTimeouts <a name="LoadBalancerRuleSetTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_rule_set

loadBalancerRuleSet.LoadBalancerRuleSetTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#create LoadBalancerRuleSet#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#delete LoadBalancerRuleSet#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#update LoadBalancerRuleSet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#create LoadBalancerRuleSet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#delete LoadBalancerRuleSet#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#update LoadBalancerRuleSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerRuleSetItemsConditionsList <a name="LoadBalancerRuleSetItemsConditionsList" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_rule_set

loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LoadBalancerRuleSetItemsConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions">LoadBalancerRuleSetItemsConditions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LoadBalancerRuleSetItemsConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions">LoadBalancerRuleSetItemsConditions</a>]]

---


### LoadBalancerRuleSetItemsConditionsOutputReference <a name="LoadBalancerRuleSetItemsConditionsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_rule_set

loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.resetOperator">reset_operator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_operator` <a name="reset_operator" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.attributeNameInput">attribute_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.attributeValueInput">attribute_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.attributeName">attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.attributeValue">attribute_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions">LoadBalancerRuleSetItemsConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_name_input`<sup>Optional</sup> <a name="attribute_name_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.attributeNameInput"></a>

```python
attribute_name_input: str
```

- *Type:* str

---

##### `attribute_value_input`<sup>Optional</sup> <a name="attribute_value_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.attributeValueInput"></a>

```python
attribute_value_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

---

##### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LoadBalancerRuleSetItemsConditions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions">LoadBalancerRuleSetItemsConditions</a>]

---


### LoadBalancerRuleSetItemsIpMaxConnectionsList <a name="LoadBalancerRuleSetItemsIpMaxConnectionsList" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_rule_set

loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections">LoadBalancerRuleSetItemsIpMaxConnections</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LoadBalancerRuleSetItemsIpMaxConnections]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections">LoadBalancerRuleSetItemsIpMaxConnections</a>]]

---


### LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference <a name="LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_rule_set

loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.resetIpAddresses">reset_ip_addresses</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.resetMaxConnections">reset_max_connections</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ip_addresses` <a name="reset_ip_addresses" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.resetIpAddresses"></a>

```python
def reset_ip_addresses() -> None
```

##### `reset_max_connections` <a name="reset_max_connections" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.resetMaxConnections"></a>

```python
def reset_max_connections() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.ipAddressesInput">ip_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.maxConnectionsInput">max_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.maxConnections">max_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections">LoadBalancerRuleSetItemsIpMaxConnections</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_addresses_input`<sup>Optional</sup> <a name="ip_addresses_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.ipAddressesInput"></a>

```python
ip_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_connections_input`<sup>Optional</sup> <a name="max_connections_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.maxConnectionsInput"></a>

```python
max_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_connections`<sup>Required</sup> <a name="max_connections" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.maxConnections"></a>

```python
max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LoadBalancerRuleSetItemsIpMaxConnections]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections">LoadBalancerRuleSetItemsIpMaxConnections</a>]

---


### LoadBalancerRuleSetItemsList <a name="LoadBalancerRuleSetItemsList" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_rule_set

loadBalancerRuleSet.LoadBalancerRuleSetItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LoadBalancerRuleSetItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems">LoadBalancerRuleSetItems</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LoadBalancerRuleSetItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems">LoadBalancerRuleSetItems</a>]]

---


### LoadBalancerRuleSetItemsOutputReference <a name="LoadBalancerRuleSetItemsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_rule_set

loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.putIpMaxConnections">put_ip_max_connections</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.putRedirectUri">put_redirect_uri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetAllowedMethods">reset_allowed_methods</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetAreInvalidCharactersAllowed">reset_are_invalid_characters_allowed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetConditions">reset_conditions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetDefaultMaxConnections">reset_default_max_connections</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetHeader">reset_header</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetHttpLargeHeaderSizeInKb">reset_http_large_header_size_in_kb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetIpMaxConnections">reset_ip_max_connections</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetRedirectUri">reset_redirect_uri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetResponseCode">reset_response_code</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetStatusCode">reset_status_code</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetSuffix">reset_suffix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_conditions` <a name="put_conditions" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.putConditions"></a>

```python
def put_conditions(
  value: typing.Union[IResolvable, typing.List[LoadBalancerRuleSetItemsConditions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.putConditions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions">LoadBalancerRuleSetItemsConditions</a>]]

---

##### `put_ip_max_connections` <a name="put_ip_max_connections" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.putIpMaxConnections"></a>

```python
def put_ip_max_connections(
  value: typing.Union[IResolvable, typing.List[LoadBalancerRuleSetItemsIpMaxConnections]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.putIpMaxConnections.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections">LoadBalancerRuleSetItemsIpMaxConnections</a>]]

---

##### `put_redirect_uri` <a name="put_redirect_uri" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.putRedirectUri"></a>

```python
def put_redirect_uri(
  host: str = None,
  path: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  query: str = None
) -> None
```

###### `host`<sup>Optional</sup> <a name="host" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.putRedirectUri.parameter.host"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#host LoadBalancerRuleSet#host}.

---

###### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.putRedirectUri.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#path LoadBalancerRuleSet#path}.

---

###### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.putRedirectUri.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#port LoadBalancerRuleSet#port}.

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.putRedirectUri.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#protocol LoadBalancerRuleSet#protocol}.

---

###### `query`<sup>Optional</sup> <a name="query" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.putRedirectUri.parameter.query"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#query LoadBalancerRuleSet#query}.

---

##### `reset_allowed_methods` <a name="reset_allowed_methods" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetAllowedMethods"></a>

```python
def reset_allowed_methods() -> None
```

##### `reset_are_invalid_characters_allowed` <a name="reset_are_invalid_characters_allowed" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetAreInvalidCharactersAllowed"></a>

```python
def reset_are_invalid_characters_allowed() -> None
```

##### `reset_conditions` <a name="reset_conditions" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetConditions"></a>

```python
def reset_conditions() -> None
```

##### `reset_default_max_connections` <a name="reset_default_max_connections" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetDefaultMaxConnections"></a>

```python
def reset_default_max_connections() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_header` <a name="reset_header" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```

##### `reset_http_large_header_size_in_kb` <a name="reset_http_large_header_size_in_kb" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetHttpLargeHeaderSizeInKb"></a>

```python
def reset_http_large_header_size_in_kb() -> None
```

##### `reset_ip_max_connections` <a name="reset_ip_max_connections" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetIpMaxConnections"></a>

```python
def reset_ip_max_connections() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_redirect_uri` <a name="reset_redirect_uri" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetRedirectUri"></a>

```python
def reset_redirect_uri() -> None
```

##### `reset_response_code` <a name="reset_response_code" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetResponseCode"></a>

```python
def reset_response_code() -> None
```

##### `reset_status_code` <a name="reset_status_code" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetStatusCode"></a>

```python
def reset_status_code() -> None
```

##### `reset_suffix` <a name="reset_suffix" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetSuffix"></a>

```python
def reset_suffix() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.conditions">conditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList">LoadBalancerRuleSetItemsConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.ipMaxConnections">ip_max_connections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList">LoadBalancerRuleSetItemsIpMaxConnectionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.redirectUri">redirect_uri</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference">LoadBalancerRuleSetItemsRedirectUriOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.allowedMethodsInput">allowed_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.areInvalidCharactersAllowedInput">are_invalid_characters_allowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.conditionsInput">conditions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions">LoadBalancerRuleSetItemsConditions</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.defaultMaxConnectionsInput">default_max_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.headerInput">header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.httpLargeHeaderSizeInKbInput">http_large_header_size_in_kb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.ipMaxConnectionsInput">ip_max_connections_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections">LoadBalancerRuleSetItemsIpMaxConnections</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.redirectUriInput">redirect_uri_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri">LoadBalancerRuleSetItemsRedirectUri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.responseCodeInput">response_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.statusCodeInput">status_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.suffixInput">suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.areInvalidCharactersAllowed">are_invalid_characters_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.defaultMaxConnections">default_max_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.header">header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.httpLargeHeaderSizeInKb">http_large_header_size_in_kb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.responseCode">response_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.suffix">suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems">LoadBalancerRuleSetItems</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.conditions"></a>

```python
conditions: LoadBalancerRuleSetItemsConditionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList">LoadBalancerRuleSetItemsConditionsList</a>

---

##### `ip_max_connections`<sup>Required</sup> <a name="ip_max_connections" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.ipMaxConnections"></a>

```python
ip_max_connections: LoadBalancerRuleSetItemsIpMaxConnectionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList">LoadBalancerRuleSetItemsIpMaxConnectionsList</a>

---

##### `redirect_uri`<sup>Required</sup> <a name="redirect_uri" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.redirectUri"></a>

```python
redirect_uri: LoadBalancerRuleSetItemsRedirectUriOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference">LoadBalancerRuleSetItemsRedirectUriOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `allowed_methods_input`<sup>Optional</sup> <a name="allowed_methods_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.allowedMethodsInput"></a>

```python
allowed_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `are_invalid_characters_allowed_input`<sup>Optional</sup> <a name="are_invalid_characters_allowed_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.areInvalidCharactersAllowedInput"></a>

```python
are_invalid_characters_allowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.conditionsInput"></a>

```python
conditions_input: typing.Union[IResolvable, typing.List[LoadBalancerRuleSetItemsConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions">LoadBalancerRuleSetItemsConditions</a>]]

---

##### `default_max_connections_input`<sup>Optional</sup> <a name="default_max_connections_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.defaultMaxConnectionsInput"></a>

```python
default_max_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.headerInput"></a>

```python
header_input: str
```

- *Type:* str

---

##### `http_large_header_size_in_kb_input`<sup>Optional</sup> <a name="http_large_header_size_in_kb_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.httpLargeHeaderSizeInKbInput"></a>

```python
http_large_header_size_in_kb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_max_connections_input`<sup>Optional</sup> <a name="ip_max_connections_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.ipMaxConnectionsInput"></a>

```python
ip_max_connections_input: typing.Union[IResolvable, typing.List[LoadBalancerRuleSetItemsIpMaxConnections]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections">LoadBalancerRuleSetItemsIpMaxConnections</a>]]

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `redirect_uri_input`<sup>Optional</sup> <a name="redirect_uri_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.redirectUriInput"></a>

```python
redirect_uri_input: LoadBalancerRuleSetItemsRedirectUri
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri">LoadBalancerRuleSetItemsRedirectUri</a>

---

##### `response_code_input`<sup>Optional</sup> <a name="response_code_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.responseCodeInput"></a>

```python
response_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_code_input`<sup>Optional</sup> <a name="status_code_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.statusCodeInput"></a>

```python
status_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `suffix_input`<sup>Optional</sup> <a name="suffix_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.suffixInput"></a>

```python
suffix_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `are_invalid_characters_allowed`<sup>Required</sup> <a name="are_invalid_characters_allowed" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.areInvalidCharactersAllowed"></a>

```python
are_invalid_characters_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_max_connections`<sup>Required</sup> <a name="default_max_connections" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.defaultMaxConnections"></a>

```python
default_max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.header"></a>

```python
header: str
```

- *Type:* str

---

##### `http_large_header_size_in_kb`<sup>Required</sup> <a name="http_large_header_size_in_kb" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.httpLargeHeaderSizeInKb"></a>

```python
http_large_header_size_in_kb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `response_code`<sup>Required</sup> <a name="response_code" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.responseCode"></a>

```python
response_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LoadBalancerRuleSetItems]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems">LoadBalancerRuleSetItems</a>]

---


### LoadBalancerRuleSetItemsRedirectUriOutputReference <a name="LoadBalancerRuleSetItemsRedirectUriOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_rule_set

loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.resetQuery">reset_query</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_host` <a name="reset_host" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_path` <a name="reset_path" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_port` <a name="reset_port" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_query` <a name="reset_query" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.resetQuery"></a>

```python
def reset_query() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri">LoadBalancerRuleSetItemsRedirectUri</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.internalValue"></a>

```python
internal_value: LoadBalancerRuleSetItemsRedirectUri
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri">LoadBalancerRuleSetItemsRedirectUri</a>

---


### LoadBalancerRuleSetTimeoutsOutputReference <a name="LoadBalancerRuleSetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_rule_set

loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts">LoadBalancerRuleSetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LoadBalancerRuleSetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts">LoadBalancerRuleSetTimeouts</a>]

---



