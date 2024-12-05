# `loadBalancerLoadBalancerRoutingPolicy` Submodule <a name="`loadBalancerLoadBalancerRoutingPolicy` Submodule" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerLoadBalancerRoutingPolicy <a name="LoadBalancerLoadBalancerRoutingPolicy" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy oci_load_balancer_load_balancer_routing_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer_routing_policy

loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  condition_language_version: str,
  load_balancer_id: str,
  name: str,
  rules: typing.Union[IResolvable, typing.List[LoadBalancerLoadBalancerRoutingPolicyRules]],
  id: str = None,
  timeouts: LoadBalancerLoadBalancerRoutingPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.conditionLanguageVersion">condition_language_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#condition_language_version LoadBalancerLoadBalancerRoutingPolicy#condition_language_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#load_balancer_id LoadBalancerLoadBalancerRoutingPolicy#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#name LoadBalancerLoadBalancerRoutingPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules">LoadBalancerLoadBalancerRoutingPolicyRules</a>]]</code> | rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#id LoadBalancerLoadBalancerRoutingPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts">LoadBalancerLoadBalancerRoutingPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition_language_version`<sup>Required</sup> <a name="condition_language_version" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.conditionLanguageVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#condition_language_version LoadBalancerLoadBalancerRoutingPolicy#condition_language_version}.

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.loadBalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#load_balancer_id LoadBalancerLoadBalancerRoutingPolicy#load_balancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#name LoadBalancerLoadBalancerRoutingPolicy#name}.

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules">LoadBalancerLoadBalancerRoutingPolicyRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#rules LoadBalancerLoadBalancerRoutingPolicy#rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#id LoadBalancerLoadBalancerRoutingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts">LoadBalancerLoadBalancerRoutingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#timeouts LoadBalancerLoadBalancerRoutingPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rules` <a name="put_rules" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[LoadBalancerLoadBalancerRoutingPolicyRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules">LoadBalancerLoadBalancerRoutingPolicyRules</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#create LoadBalancerLoadBalancerRoutingPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#delete LoadBalancerLoadBalancerRoutingPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#update LoadBalancerLoadBalancerRoutingPolicy#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LoadBalancerLoadBalancerRoutingPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer_routing_policy

loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer_routing_policy

loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer_routing_policy

loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer_routing_policy

loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LoadBalancerLoadBalancerRoutingPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LoadBalancerLoadBalancerRoutingPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LoadBalancerLoadBalancerRoutingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancerLoadBalancerRoutingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList">LoadBalancerLoadBalancerRoutingPolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference">LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.conditionLanguageVersionInput">condition_language_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.loadBalancerIdInput">load_balancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules">LoadBalancerLoadBalancerRoutingPolicyRules</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts">LoadBalancerLoadBalancerRoutingPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.conditionLanguageVersion">condition_language_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.rules"></a>

```python
rules: LoadBalancerLoadBalancerRoutingPolicyRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList">LoadBalancerLoadBalancerRoutingPolicyRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.timeouts"></a>

```python
timeouts: LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference">LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference</a>

---

##### `condition_language_version_input`<sup>Optional</sup> <a name="condition_language_version_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.conditionLanguageVersionInput"></a>

```python
condition_language_version_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `load_balancer_id_input`<sup>Optional</sup> <a name="load_balancer_id_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.loadBalancerIdInput"></a>

```python
load_balancer_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[LoadBalancerLoadBalancerRoutingPolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules">LoadBalancerLoadBalancerRoutingPolicyRules</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LoadBalancerLoadBalancerRoutingPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts">LoadBalancerLoadBalancerRoutingPolicyTimeouts</a>]

---

##### `condition_language_version`<sup>Required</sup> <a name="condition_language_version" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.conditionLanguageVersion"></a>

```python
condition_language_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerLoadBalancerRoutingPolicyConfig <a name="LoadBalancerLoadBalancerRoutingPolicyConfig" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer_routing_policy

loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  condition_language_version: str,
  load_balancer_id: str,
  name: str,
  rules: typing.Union[IResolvable, typing.List[LoadBalancerLoadBalancerRoutingPolicyRules]],
  id: str = None,
  timeouts: LoadBalancerLoadBalancerRoutingPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.conditionLanguageVersion">condition_language_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#condition_language_version LoadBalancerLoadBalancerRoutingPolicy#condition_language_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#load_balancer_id LoadBalancerLoadBalancerRoutingPolicy#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#name LoadBalancerLoadBalancerRoutingPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules">LoadBalancerLoadBalancerRoutingPolicyRules</a>]]</code> | rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#id LoadBalancerLoadBalancerRoutingPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts">LoadBalancerLoadBalancerRoutingPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition_language_version`<sup>Required</sup> <a name="condition_language_version" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.conditionLanguageVersion"></a>

```python
condition_language_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#condition_language_version LoadBalancerLoadBalancerRoutingPolicy#condition_language_version}.

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#load_balancer_id LoadBalancerLoadBalancerRoutingPolicy#load_balancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#name LoadBalancerLoadBalancerRoutingPolicy#name}.

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[LoadBalancerLoadBalancerRoutingPolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules">LoadBalancerLoadBalancerRoutingPolicyRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#rules LoadBalancerLoadBalancerRoutingPolicy#rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#id LoadBalancerLoadBalancerRoutingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyConfig.property.timeouts"></a>

```python
timeouts: LoadBalancerLoadBalancerRoutingPolicyTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts">LoadBalancerLoadBalancerRoutingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#timeouts LoadBalancerLoadBalancerRoutingPolicy#timeouts}

---

### LoadBalancerLoadBalancerRoutingPolicyRules <a name="LoadBalancerLoadBalancerRoutingPolicyRules" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer_routing_policy

loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules(
  actions: typing.Union[IResolvable, typing.List[LoadBalancerLoadBalancerRoutingPolicyRulesActions]],
  condition: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules.property.actions">actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions">LoadBalancerLoadBalancerRoutingPolicyRulesActions</a>]]</code> | actions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules.property.condition">condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#condition LoadBalancerLoadBalancerRoutingPolicy#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#name LoadBalancerLoadBalancerRoutingPolicy#name}. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules.property.actions"></a>

```python
actions: typing.Union[IResolvable, typing.List[LoadBalancerLoadBalancerRoutingPolicyRulesActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions">LoadBalancerLoadBalancerRoutingPolicyRulesActions</a>]]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#actions LoadBalancerLoadBalancerRoutingPolicy#actions}

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules.property.condition"></a>

```python
condition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#condition LoadBalancerLoadBalancerRoutingPolicy#condition}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#name LoadBalancerLoadBalancerRoutingPolicy#name}.

---

### LoadBalancerLoadBalancerRoutingPolicyRulesActions <a name="LoadBalancerLoadBalancerRoutingPolicyRulesActions" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer_routing_policy

loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions(
  backend_set_name: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions.property.backendSetName">backend_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#backend_set_name LoadBalancerLoadBalancerRoutingPolicy#backend_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#name LoadBalancerLoadBalancerRoutingPolicy#name}. |

---

##### `backend_set_name`<sup>Required</sup> <a name="backend_set_name" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions.property.backendSetName"></a>

```python
backend_set_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#backend_set_name LoadBalancerLoadBalancerRoutingPolicy#backend_set_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#name LoadBalancerLoadBalancerRoutingPolicy#name}.

---

### LoadBalancerLoadBalancerRoutingPolicyTimeouts <a name="LoadBalancerLoadBalancerRoutingPolicyTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer_routing_policy

loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#create LoadBalancerLoadBalancerRoutingPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#delete LoadBalancerLoadBalancerRoutingPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#update LoadBalancerLoadBalancerRoutingPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#create LoadBalancerLoadBalancerRoutingPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#delete LoadBalancerLoadBalancerRoutingPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer_routing_policy#update LoadBalancerLoadBalancerRoutingPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerLoadBalancerRoutingPolicyRulesActionsList <a name="LoadBalancerLoadBalancerRoutingPolicyRulesActionsList" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer_routing_policy

loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions">LoadBalancerLoadBalancerRoutingPolicyRulesActions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LoadBalancerLoadBalancerRoutingPolicyRulesActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions">LoadBalancerLoadBalancerRoutingPolicyRulesActions</a>]]

---


### LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference <a name="LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer_routing_policy

loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.backendSetNameInput">backend_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.backendSetName">backend_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions">LoadBalancerLoadBalancerRoutingPolicyRulesActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backend_set_name_input`<sup>Optional</sup> <a name="backend_set_name_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.backendSetNameInput"></a>

```python
backend_set_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `backend_set_name`<sup>Required</sup> <a name="backend_set_name" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.backendSetName"></a>

```python
backend_set_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LoadBalancerLoadBalancerRoutingPolicyRulesActions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions">LoadBalancerLoadBalancerRoutingPolicyRulesActions</a>]

---


### LoadBalancerLoadBalancerRoutingPolicyRulesList <a name="LoadBalancerLoadBalancerRoutingPolicyRulesList" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer_routing_policy

loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules">LoadBalancerLoadBalancerRoutingPolicyRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LoadBalancerLoadBalancerRoutingPolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules">LoadBalancerLoadBalancerRoutingPolicyRules</a>]]

---


### LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference <a name="LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer_routing_policy

loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.putActions">put_actions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_actions` <a name="put_actions" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.putActions"></a>

```python
def put_actions(
  value: typing.Union[IResolvable, typing.List[LoadBalancerLoadBalancerRoutingPolicyRulesActions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.putActions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions">LoadBalancerLoadBalancerRoutingPolicyRulesActions</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.actions">actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList">LoadBalancerLoadBalancerRoutingPolicyRulesActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions">LoadBalancerLoadBalancerRoutingPolicyRulesActions</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules">LoadBalancerLoadBalancerRoutingPolicyRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.actions"></a>

```python
actions: LoadBalancerLoadBalancerRoutingPolicyRulesActionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActionsList">LoadBalancerLoadBalancerRoutingPolicyRulesActionsList</a>

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.actionsInput"></a>

```python
actions_input: typing.Union[IResolvable, typing.List[LoadBalancerLoadBalancerRoutingPolicyRulesActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesActions">LoadBalancerLoadBalancerRoutingPolicyRulesActions</a>]]

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LoadBalancerLoadBalancerRoutingPolicyRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyRules">LoadBalancerLoadBalancerRoutingPolicyRules</a>]

---


### LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference <a name="LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_load_balancer_routing_policy

loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts">LoadBalancerLoadBalancerRoutingPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LoadBalancerLoadBalancerRoutingPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancerRoutingPolicy.LoadBalancerLoadBalancerRoutingPolicyTimeouts">LoadBalancerLoadBalancerRoutingPolicyTimeouts</a>]

---



