# `loadBalancerPathRouteSet` Submodule <a name="`loadBalancerPathRouteSet` Submodule" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerPathRouteSet <a name="LoadBalancerPathRouteSet" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set oci_load_balancer_path_route_set}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_path_route_set

loadBalancerPathRouteSet.LoadBalancerPathRouteSet(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  load_balancer_id: str,
  name: str,
  path_routes: typing.Union[IResolvable, typing.List[LoadBalancerPathRouteSetPathRoutes]],
  id: str = None,
  timeouts: LoadBalancerPathRouteSetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.Initializer.parameter.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#load_balancer_id LoadBalancerPathRouteSet#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#name LoadBalancerPathRouteSet#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.Initializer.parameter.pathRoutes">path_routes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutes">LoadBalancerPathRouteSetPathRoutes</a>]]</code> | path_routes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#id LoadBalancerPathRouteSet#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeouts">LoadBalancerPathRouteSetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.Initializer.parameter.loadBalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#load_balancer_id LoadBalancerPathRouteSet#load_balancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#name LoadBalancerPathRouteSet#name}.

---

##### `path_routes`<sup>Required</sup> <a name="path_routes" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.Initializer.parameter.pathRoutes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutes">LoadBalancerPathRouteSetPathRoutes</a>]]

path_routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#path_routes LoadBalancerPathRouteSet#path_routes}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#id LoadBalancerPathRouteSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeouts">LoadBalancerPathRouteSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#timeouts LoadBalancerPathRouteSet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.putPathRoutes">put_path_routes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_path_routes` <a name="put_path_routes" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.putPathRoutes"></a>

```python
def put_path_routes(
  value: typing.Union[IResolvable, typing.List[LoadBalancerPathRouteSetPathRoutes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.putPathRoutes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutes">LoadBalancerPathRouteSetPathRoutes</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#create LoadBalancerPathRouteSet#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#delete LoadBalancerPathRouteSet#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#update LoadBalancerPathRouteSet#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LoadBalancerPathRouteSet resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_path_route_set

loadBalancerPathRouteSet.LoadBalancerPathRouteSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_path_route_set

loadBalancerPathRouteSet.LoadBalancerPathRouteSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_path_route_set

loadBalancerPathRouteSet.LoadBalancerPathRouteSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_path_route_set

loadBalancerPathRouteSet.LoadBalancerPathRouteSet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LoadBalancerPathRouteSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LoadBalancerPathRouteSet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LoadBalancerPathRouteSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancerPathRouteSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.pathRoutes">path_routes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList">LoadBalancerPathRouteSetPathRoutesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference">LoadBalancerPathRouteSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.loadBalancerIdInput">load_balancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.pathRoutesInput">path_routes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutes">LoadBalancerPathRouteSetPathRoutes</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeouts">LoadBalancerPathRouteSetTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `path_routes`<sup>Required</sup> <a name="path_routes" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.pathRoutes"></a>

```python
path_routes: LoadBalancerPathRouteSetPathRoutesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList">LoadBalancerPathRouteSetPathRoutesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.timeouts"></a>

```python
timeouts: LoadBalancerPathRouteSetTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference">LoadBalancerPathRouteSetTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `load_balancer_id_input`<sup>Optional</sup> <a name="load_balancer_id_input" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.loadBalancerIdInput"></a>

```python
load_balancer_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_routes_input`<sup>Optional</sup> <a name="path_routes_input" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.pathRoutesInput"></a>

```python
path_routes_input: typing.Union[IResolvable, typing.List[LoadBalancerPathRouteSetPathRoutes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutes">LoadBalancerPathRouteSetPathRoutes</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LoadBalancerPathRouteSetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeouts">LoadBalancerPathRouteSetTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerPathRouteSetConfig <a name="LoadBalancerPathRouteSetConfig" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_path_route_set

loadBalancerPathRouteSet.LoadBalancerPathRouteSetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  load_balancer_id: str,
  name: str,
  path_routes: typing.Union[IResolvable, typing.List[LoadBalancerPathRouteSetPathRoutes]],
  id: str = None,
  timeouts: LoadBalancerPathRouteSetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetConfig.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#load_balancer_id LoadBalancerPathRouteSet#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#name LoadBalancerPathRouteSet#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetConfig.property.pathRoutes">path_routes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutes">LoadBalancerPathRouteSetPathRoutes</a>]]</code> | path_routes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#id LoadBalancerPathRouteSet#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeouts">LoadBalancerPathRouteSetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetConfig.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#load_balancer_id LoadBalancerPathRouteSet#load_balancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#name LoadBalancerPathRouteSet#name}.

---

##### `path_routes`<sup>Required</sup> <a name="path_routes" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetConfig.property.pathRoutes"></a>

```python
path_routes: typing.Union[IResolvable, typing.List[LoadBalancerPathRouteSetPathRoutes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutes">LoadBalancerPathRouteSetPathRoutes</a>]]

path_routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#path_routes LoadBalancerPathRouteSet#path_routes}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#id LoadBalancerPathRouteSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetConfig.property.timeouts"></a>

```python
timeouts: LoadBalancerPathRouteSetTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeouts">LoadBalancerPathRouteSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#timeouts LoadBalancerPathRouteSet#timeouts}

---

### LoadBalancerPathRouteSetPathRoutes <a name="LoadBalancerPathRouteSetPathRoutes" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_path_route_set

loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutes(
  backend_set_name: str,
  path: str,
  path_match_type: LoadBalancerPathRouteSetPathRoutesPathMatchType
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutes.property.backendSetName">backend_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#backend_set_name LoadBalancerPathRouteSet#backend_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutes.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#path LoadBalancerPathRouteSet#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutes.property.pathMatchType">path_match_type</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchType">LoadBalancerPathRouteSetPathRoutesPathMatchType</a></code> | path_match_type block. |

---

##### `backend_set_name`<sup>Required</sup> <a name="backend_set_name" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutes.property.backendSetName"></a>

```python
backend_set_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#backend_set_name LoadBalancerPathRouteSet#backend_set_name}.

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutes.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#path LoadBalancerPathRouteSet#path}.

---

##### `path_match_type`<sup>Required</sup> <a name="path_match_type" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutes.property.pathMatchType"></a>

```python
path_match_type: LoadBalancerPathRouteSetPathRoutesPathMatchType
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchType">LoadBalancerPathRouteSetPathRoutesPathMatchType</a>

path_match_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#path_match_type LoadBalancerPathRouteSet#path_match_type}

---

### LoadBalancerPathRouteSetPathRoutesPathMatchType <a name="LoadBalancerPathRouteSetPathRoutesPathMatchType" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchType"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchType.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_path_route_set

loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchType(
  match_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchType.property.matchType">match_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#match_type LoadBalancerPathRouteSet#match_type}. |

---

##### `match_type`<sup>Required</sup> <a name="match_type" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchType.property.matchType"></a>

```python
match_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#match_type LoadBalancerPathRouteSet#match_type}.

---

### LoadBalancerPathRouteSetTimeouts <a name="LoadBalancerPathRouteSetTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_path_route_set

loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#create LoadBalancerPathRouteSet#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#delete LoadBalancerPathRouteSet#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#update LoadBalancerPathRouteSet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#create LoadBalancerPathRouteSet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#delete LoadBalancerPathRouteSet#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#update LoadBalancerPathRouteSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerPathRouteSetPathRoutesList <a name="LoadBalancerPathRouteSetPathRoutesList" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_path_route_set

loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LoadBalancerPathRouteSetPathRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutes">LoadBalancerPathRouteSetPathRoutes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LoadBalancerPathRouteSetPathRoutes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutes">LoadBalancerPathRouteSetPathRoutes</a>]]

---


### LoadBalancerPathRouteSetPathRoutesOutputReference <a name="LoadBalancerPathRouteSetPathRoutesOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_path_route_set

loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.putPathMatchType">put_path_match_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_path_match_type` <a name="put_path_match_type" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.putPathMatchType"></a>

```python
def put_path_match_type(
  match_type: str
) -> None
```

###### `match_type`<sup>Required</sup> <a name="match_type" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.putPathMatchType.parameter.matchType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_path_route_set#match_type LoadBalancerPathRouteSet#match_type}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.property.pathMatchType">path_match_type</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference">LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.property.backendSetNameInput">backend_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.property.pathMatchTypeInput">path_match_type_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchType">LoadBalancerPathRouteSetPathRoutesPathMatchType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.property.backendSetName">backend_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutes">LoadBalancerPathRouteSetPathRoutes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_match_type`<sup>Required</sup> <a name="path_match_type" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.property.pathMatchType"></a>

```python
path_match_type: LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference">LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference</a>

---

##### `backend_set_name_input`<sup>Optional</sup> <a name="backend_set_name_input" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.property.backendSetNameInput"></a>

```python
backend_set_name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path_match_type_input`<sup>Optional</sup> <a name="path_match_type_input" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.property.pathMatchTypeInput"></a>

```python
path_match_type_input: LoadBalancerPathRouteSetPathRoutesPathMatchType
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchType">LoadBalancerPathRouteSetPathRoutesPathMatchType</a>

---

##### `backend_set_name`<sup>Required</sup> <a name="backend_set_name" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.property.backendSetName"></a>

```python
backend_set_name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LoadBalancerPathRouteSetPathRoutes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutes">LoadBalancerPathRouteSetPathRoutes</a>]

---


### LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference <a name="LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_path_route_set

loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.property.matchTypeInput">match_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.property.matchType">match_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchType">LoadBalancerPathRouteSetPathRoutesPathMatchType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_type_input`<sup>Optional</sup> <a name="match_type_input" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.property.matchTypeInput"></a>

```python
match_type_input: str
```

- *Type:* str

---

##### `match_type`<sup>Required</sup> <a name="match_type" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.property.matchType"></a>

```python
match_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchTypeOutputReference.property.internalValue"></a>

```python
internal_value: LoadBalancerPathRouteSetPathRoutesPathMatchType
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetPathRoutesPathMatchType">LoadBalancerPathRouteSetPathRoutesPathMatchType</a>

---


### LoadBalancerPathRouteSetTimeoutsOutputReference <a name="LoadBalancerPathRouteSetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_path_route_set

loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeouts">LoadBalancerPathRouteSetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LoadBalancerPathRouteSetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerPathRouteSet.LoadBalancerPathRouteSetTimeouts">LoadBalancerPathRouteSetTimeouts</a>]

---



