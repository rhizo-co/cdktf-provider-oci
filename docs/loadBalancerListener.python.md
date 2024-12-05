# `loadBalancerListener` Submodule <a name="`loadBalancerListener` Submodule" id="rhizo-co-terraform-provider-oci.loadBalancerListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerListener <a name="LoadBalancerListener" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener oci_load_balancer_listener}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_listener

loadBalancerListener.LoadBalancerListener(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_backend_set_name: str,
  load_balancer_id: str,
  name: str,
  port: typing.Union[int, float],
  protocol: str,
  connection_configuration: LoadBalancerListenerConnectionConfiguration = None,
  hostname_names: typing.List[str] = None,
  id: str = None,
  path_route_set_name: str = None,
  routing_policy_name: str = None,
  rule_set_names: typing.List[str] = None,
  ssl_configuration: LoadBalancerListenerSslConfiguration = None,
  timeouts: LoadBalancerListenerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.defaultBackendSetName">default_backend_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#default_backend_set_name LoadBalancerListener#default_backend_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#load_balancer_id LoadBalancerListener#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#name LoadBalancerListener#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#port LoadBalancerListener#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#protocol LoadBalancerListener#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.connectionConfiguration">connection_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a></code> | connection_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.hostnameNames">hostname_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#hostname_names LoadBalancerListener#hostname_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#id LoadBalancerListener#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.pathRouteSetName">path_route_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#path_route_set_name LoadBalancerListener#path_route_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.routingPolicyName">routing_policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#routing_policy_name LoadBalancerListener#routing_policy_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.ruleSetNames">rule_set_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#rule_set_names LoadBalancerListener#rule_set_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.sslConfiguration">ssl_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a></code> | ssl_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_backend_set_name`<sup>Required</sup> <a name="default_backend_set_name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.defaultBackendSetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#default_backend_set_name LoadBalancerListener#default_backend_set_name}.

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.loadBalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#load_balancer_id LoadBalancerListener#load_balancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#name LoadBalancerListener#name}.

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#port LoadBalancerListener#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#protocol LoadBalancerListener#protocol}.

---

##### `connection_configuration`<sup>Optional</sup> <a name="connection_configuration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.connectionConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a>

connection_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#connection_configuration LoadBalancerListener#connection_configuration}

---

##### `hostname_names`<sup>Optional</sup> <a name="hostname_names" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.hostnameNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#hostname_names LoadBalancerListener#hostname_names}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#id LoadBalancerListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `path_route_set_name`<sup>Optional</sup> <a name="path_route_set_name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.pathRouteSetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#path_route_set_name LoadBalancerListener#path_route_set_name}.

---

##### `routing_policy_name`<sup>Optional</sup> <a name="routing_policy_name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.routingPolicyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#routing_policy_name LoadBalancerListener#routing_policy_name}.

---

##### `rule_set_names`<sup>Optional</sup> <a name="rule_set_names" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.ruleSetNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#rule_set_names LoadBalancerListener#rule_set_names}.

---

##### `ssl_configuration`<sup>Optional</sup> <a name="ssl_configuration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.sslConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a>

ssl_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#ssl_configuration LoadBalancerListener#ssl_configuration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#timeouts LoadBalancerListener#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putConnectionConfiguration">put_connection_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putSslConfiguration">put_ssl_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetConnectionConfiguration">reset_connection_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetHostnameNames">reset_hostname_names</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetPathRouteSetName">reset_path_route_set_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetRoutingPolicyName">reset_routing_policy_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetRuleSetNames">reset_rule_set_names</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetSslConfiguration">reset_ssl_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_connection_configuration` <a name="put_connection_configuration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putConnectionConfiguration"></a>

```python
def put_connection_configuration(
  idle_timeout_in_seconds: str,
  backend_tcp_proxy_protocol_options: typing.List[str] = None,
  backend_tcp_proxy_protocol_version: typing.Union[int, float] = None
) -> None
```

###### `idle_timeout_in_seconds`<sup>Required</sup> <a name="idle_timeout_in_seconds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putConnectionConfiguration.parameter.idleTimeoutInSeconds"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#idle_timeout_in_seconds LoadBalancerListener#idle_timeout_in_seconds}.

---

###### `backend_tcp_proxy_protocol_options`<sup>Optional</sup> <a name="backend_tcp_proxy_protocol_options" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putConnectionConfiguration.parameter.backendTcpProxyProtocolOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#backend_tcp_proxy_protocol_options LoadBalancerListener#backend_tcp_proxy_protocol_options}.

---

###### `backend_tcp_proxy_protocol_version`<sup>Optional</sup> <a name="backend_tcp_proxy_protocol_version" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putConnectionConfiguration.parameter.backendTcpProxyProtocolVersion"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#backend_tcp_proxy_protocol_version LoadBalancerListener#backend_tcp_proxy_protocol_version}.

---

##### `put_ssl_configuration` <a name="put_ssl_configuration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putSslConfiguration"></a>

```python
def put_ssl_configuration(
  certificate_ids: typing.List[str] = None,
  certificate_name: str = None,
  cipher_suite_name: str = None,
  has_session_resumption: typing.Union[bool, IResolvable] = None,
  protocols: typing.List[str] = None,
  server_order_preference: str = None,
  trusted_certificate_authority_ids: typing.List[str] = None,
  verify_depth: typing.Union[int, float] = None,
  verify_peer_certificate: typing.Union[bool, IResolvable] = None
) -> None
```

###### `certificate_ids`<sup>Optional</sup> <a name="certificate_ids" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putSslConfiguration.parameter.certificateIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#certificate_ids LoadBalancerListener#certificate_ids}.

---

###### `certificate_name`<sup>Optional</sup> <a name="certificate_name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putSslConfiguration.parameter.certificateName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#certificate_name LoadBalancerListener#certificate_name}.

---

###### `cipher_suite_name`<sup>Optional</sup> <a name="cipher_suite_name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putSslConfiguration.parameter.cipherSuiteName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#cipher_suite_name LoadBalancerListener#cipher_suite_name}.

---

###### `has_session_resumption`<sup>Optional</sup> <a name="has_session_resumption" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putSslConfiguration.parameter.hasSessionResumption"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#has_session_resumption LoadBalancerListener#has_session_resumption}.

---

###### `protocols`<sup>Optional</sup> <a name="protocols" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putSslConfiguration.parameter.protocols"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#protocols LoadBalancerListener#protocols}.

---

###### `server_order_preference`<sup>Optional</sup> <a name="server_order_preference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putSslConfiguration.parameter.serverOrderPreference"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#server_order_preference LoadBalancerListener#server_order_preference}.

---

###### `trusted_certificate_authority_ids`<sup>Optional</sup> <a name="trusted_certificate_authority_ids" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putSslConfiguration.parameter.trustedCertificateAuthorityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#trusted_certificate_authority_ids LoadBalancerListener#trusted_certificate_authority_ids}.

---

###### `verify_depth`<sup>Optional</sup> <a name="verify_depth" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putSslConfiguration.parameter.verifyDepth"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#verify_depth LoadBalancerListener#verify_depth}.

---

###### `verify_peer_certificate`<sup>Optional</sup> <a name="verify_peer_certificate" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putSslConfiguration.parameter.verifyPeerCertificate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#verify_peer_certificate LoadBalancerListener#verify_peer_certificate}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#create LoadBalancerListener#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#delete LoadBalancerListener#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#update LoadBalancerListener#update}.

---

##### `reset_connection_configuration` <a name="reset_connection_configuration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetConnectionConfiguration"></a>

```python
def reset_connection_configuration() -> None
```

##### `reset_hostname_names` <a name="reset_hostname_names" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetHostnameNames"></a>

```python
def reset_hostname_names() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_path_route_set_name` <a name="reset_path_route_set_name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetPathRouteSetName"></a>

```python
def reset_path_route_set_name() -> None
```

##### `reset_routing_policy_name` <a name="reset_routing_policy_name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetRoutingPolicyName"></a>

```python
def reset_routing_policy_name() -> None
```

##### `reset_rule_set_names` <a name="reset_rule_set_names" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetRuleSetNames"></a>

```python
def reset_rule_set_names() -> None
```

##### `reset_ssl_configuration` <a name="reset_ssl_configuration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetSslConfiguration"></a>

```python
def reset_ssl_configuration() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LoadBalancerListener resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_listener

loadBalancerListener.LoadBalancerListener.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_listener

loadBalancerListener.LoadBalancerListener.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_listener

loadBalancerListener.LoadBalancerListener.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_listener

loadBalancerListener.LoadBalancerListener.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LoadBalancerListener resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LoadBalancerListener to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LoadBalancerListener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancerListener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connectionConfiguration">connection_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference">LoadBalancerListenerConnectionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.sslConfiguration">ssl_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference">LoadBalancerListenerSslConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference">LoadBalancerListenerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connectionConfigurationInput">connection_configuration_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.defaultBackendSetNameInput">default_backend_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.hostnameNamesInput">hostname_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.loadBalancerIdInput">load_balancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.pathRouteSetNameInput">path_route_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.routingPolicyNameInput">routing_policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.ruleSetNamesInput">rule_set_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.sslConfigurationInput">ssl_configuration_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.defaultBackendSetName">default_backend_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.hostnameNames">hostname_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.pathRouteSetName">path_route_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.routingPolicyName">routing_policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.ruleSetNames">rule_set_names</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_configuration`<sup>Required</sup> <a name="connection_configuration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connectionConfiguration"></a>

```python
connection_configuration: LoadBalancerListenerConnectionConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference">LoadBalancerListenerConnectionConfigurationOutputReference</a>

---

##### `ssl_configuration`<sup>Required</sup> <a name="ssl_configuration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.sslConfiguration"></a>

```python
ssl_configuration: LoadBalancerListenerSslConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference">LoadBalancerListenerSslConfigurationOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.timeouts"></a>

```python
timeouts: LoadBalancerListenerTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference">LoadBalancerListenerTimeoutsOutputReference</a>

---

##### `connection_configuration_input`<sup>Optional</sup> <a name="connection_configuration_input" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connectionConfigurationInput"></a>

```python
connection_configuration_input: LoadBalancerListenerConnectionConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a>

---

##### `default_backend_set_name_input`<sup>Optional</sup> <a name="default_backend_set_name_input" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.defaultBackendSetNameInput"></a>

```python
default_backend_set_name_input: str
```

- *Type:* str

---

##### `hostname_names_input`<sup>Optional</sup> <a name="hostname_names_input" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.hostnameNamesInput"></a>

```python
hostname_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `load_balancer_id_input`<sup>Optional</sup> <a name="load_balancer_id_input" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.loadBalancerIdInput"></a>

```python
load_balancer_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_route_set_name_input`<sup>Optional</sup> <a name="path_route_set_name_input" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.pathRouteSetNameInput"></a>

```python
path_route_set_name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `routing_policy_name_input`<sup>Optional</sup> <a name="routing_policy_name_input" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.routingPolicyNameInput"></a>

```python
routing_policy_name_input: str
```

- *Type:* str

---

##### `rule_set_names_input`<sup>Optional</sup> <a name="rule_set_names_input" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.ruleSetNamesInput"></a>

```python
rule_set_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ssl_configuration_input`<sup>Optional</sup> <a name="ssl_configuration_input" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.sslConfigurationInput"></a>

```python
ssl_configuration_input: LoadBalancerListenerSslConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LoadBalancerListenerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a>]

---

##### `default_backend_set_name`<sup>Required</sup> <a name="default_backend_set_name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.defaultBackendSetName"></a>

```python
default_backend_set_name: str
```

- *Type:* str

---

##### `hostname_names`<sup>Required</sup> <a name="hostname_names" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.hostnameNames"></a>

```python
hostname_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path_route_set_name`<sup>Required</sup> <a name="path_route_set_name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.pathRouteSetName"></a>

```python
path_route_set_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `routing_policy_name`<sup>Required</sup> <a name="routing_policy_name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.routingPolicyName"></a>

```python
routing_policy_name: str
```

- *Type:* str

---

##### `rule_set_names`<sup>Required</sup> <a name="rule_set_names" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.ruleSetNames"></a>

```python
rule_set_names: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerListenerConfig <a name="LoadBalancerListenerConfig" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_listener

loadBalancerListener.LoadBalancerListenerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_backend_set_name: str,
  load_balancer_id: str,
  name: str,
  port: typing.Union[int, float],
  protocol: str,
  connection_configuration: LoadBalancerListenerConnectionConfiguration = None,
  hostname_names: typing.List[str] = None,
  id: str = None,
  path_route_set_name: str = None,
  routing_policy_name: str = None,
  rule_set_names: typing.List[str] = None,
  ssl_configuration: LoadBalancerListenerSslConfiguration = None,
  timeouts: LoadBalancerListenerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.defaultBackendSetName">default_backend_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#default_backend_set_name LoadBalancerListener#default_backend_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#load_balancer_id LoadBalancerListener#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#name LoadBalancerListener#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#port LoadBalancerListener#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#protocol LoadBalancerListener#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.connectionConfiguration">connection_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a></code> | connection_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.hostnameNames">hostname_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#hostname_names LoadBalancerListener#hostname_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#id LoadBalancerListener#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.pathRouteSetName">path_route_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#path_route_set_name LoadBalancerListener#path_route_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.routingPolicyName">routing_policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#routing_policy_name LoadBalancerListener#routing_policy_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.ruleSetNames">rule_set_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#rule_set_names LoadBalancerListener#rule_set_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.sslConfiguration">ssl_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a></code> | ssl_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_backend_set_name`<sup>Required</sup> <a name="default_backend_set_name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.defaultBackendSetName"></a>

```python
default_backend_set_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#default_backend_set_name LoadBalancerListener#default_backend_set_name}.

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#load_balancer_id LoadBalancerListener#load_balancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#name LoadBalancerListener#name}.

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#port LoadBalancerListener#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#protocol LoadBalancerListener#protocol}.

---

##### `connection_configuration`<sup>Optional</sup> <a name="connection_configuration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.connectionConfiguration"></a>

```python
connection_configuration: LoadBalancerListenerConnectionConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a>

connection_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#connection_configuration LoadBalancerListener#connection_configuration}

---

##### `hostname_names`<sup>Optional</sup> <a name="hostname_names" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.hostnameNames"></a>

```python
hostname_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#hostname_names LoadBalancerListener#hostname_names}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#id LoadBalancerListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `path_route_set_name`<sup>Optional</sup> <a name="path_route_set_name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.pathRouteSetName"></a>

```python
path_route_set_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#path_route_set_name LoadBalancerListener#path_route_set_name}.

---

##### `routing_policy_name`<sup>Optional</sup> <a name="routing_policy_name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.routingPolicyName"></a>

```python
routing_policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#routing_policy_name LoadBalancerListener#routing_policy_name}.

---

##### `rule_set_names`<sup>Optional</sup> <a name="rule_set_names" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.ruleSetNames"></a>

```python
rule_set_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#rule_set_names LoadBalancerListener#rule_set_names}.

---

##### `ssl_configuration`<sup>Optional</sup> <a name="ssl_configuration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.sslConfiguration"></a>

```python
ssl_configuration: LoadBalancerListenerSslConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a>

ssl_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#ssl_configuration LoadBalancerListener#ssl_configuration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.timeouts"></a>

```python
timeouts: LoadBalancerListenerTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#timeouts LoadBalancerListener#timeouts}

---

### LoadBalancerListenerConnectionConfiguration <a name="LoadBalancerListenerConnectionConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_listener

loadBalancerListener.LoadBalancerListenerConnectionConfiguration(
  idle_timeout_in_seconds: str,
  backend_tcp_proxy_protocol_options: typing.List[str] = None,
  backend_tcp_proxy_protocol_version: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.idleTimeoutInSeconds">idle_timeout_in_seconds</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#idle_timeout_in_seconds LoadBalancerListener#idle_timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.backendTcpProxyProtocolOptions">backend_tcp_proxy_protocol_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#backend_tcp_proxy_protocol_options LoadBalancerListener#backend_tcp_proxy_protocol_options}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.backendTcpProxyProtocolVersion">backend_tcp_proxy_protocol_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#backend_tcp_proxy_protocol_version LoadBalancerListener#backend_tcp_proxy_protocol_version}. |

---

##### `idle_timeout_in_seconds`<sup>Required</sup> <a name="idle_timeout_in_seconds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.idleTimeoutInSeconds"></a>

```python
idle_timeout_in_seconds: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#idle_timeout_in_seconds LoadBalancerListener#idle_timeout_in_seconds}.

---

##### `backend_tcp_proxy_protocol_options`<sup>Optional</sup> <a name="backend_tcp_proxy_protocol_options" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.backendTcpProxyProtocolOptions"></a>

```python
backend_tcp_proxy_protocol_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#backend_tcp_proxy_protocol_options LoadBalancerListener#backend_tcp_proxy_protocol_options}.

---

##### `backend_tcp_proxy_protocol_version`<sup>Optional</sup> <a name="backend_tcp_proxy_protocol_version" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.backendTcpProxyProtocolVersion"></a>

```python
backend_tcp_proxy_protocol_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#backend_tcp_proxy_protocol_version LoadBalancerListener#backend_tcp_proxy_protocol_version}.

---

### LoadBalancerListenerSslConfiguration <a name="LoadBalancerListenerSslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_listener

loadBalancerListener.LoadBalancerListenerSslConfiguration(
  certificate_ids: typing.List[str] = None,
  certificate_name: str = None,
  cipher_suite_name: str = None,
  has_session_resumption: typing.Union[bool, IResolvable] = None,
  protocols: typing.List[str] = None,
  server_order_preference: str = None,
  trusted_certificate_authority_ids: typing.List[str] = None,
  verify_depth: typing.Union[int, float] = None,
  verify_peer_certificate: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.certificateIds">certificate_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#certificate_ids LoadBalancerListener#certificate_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.certificateName">certificate_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#certificate_name LoadBalancerListener#certificate_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.cipherSuiteName">cipher_suite_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#cipher_suite_name LoadBalancerListener#cipher_suite_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.hasSessionResumption">has_session_resumption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#has_session_resumption LoadBalancerListener#has_session_resumption}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#protocols LoadBalancerListener#protocols}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.serverOrderPreference">server_order_preference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#server_order_preference LoadBalancerListener#server_order_preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.trustedCertificateAuthorityIds">trusted_certificate_authority_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#trusted_certificate_authority_ids LoadBalancerListener#trusted_certificate_authority_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.verifyDepth">verify_depth</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#verify_depth LoadBalancerListener#verify_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.verifyPeerCertificate">verify_peer_certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#verify_peer_certificate LoadBalancerListener#verify_peer_certificate}. |

---

##### `certificate_ids`<sup>Optional</sup> <a name="certificate_ids" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.certificateIds"></a>

```python
certificate_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#certificate_ids LoadBalancerListener#certificate_ids}.

---

##### `certificate_name`<sup>Optional</sup> <a name="certificate_name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#certificate_name LoadBalancerListener#certificate_name}.

---

##### `cipher_suite_name`<sup>Optional</sup> <a name="cipher_suite_name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.cipherSuiteName"></a>

```python
cipher_suite_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#cipher_suite_name LoadBalancerListener#cipher_suite_name}.

---

##### `has_session_resumption`<sup>Optional</sup> <a name="has_session_resumption" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.hasSessionResumption"></a>

```python
has_session_resumption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#has_session_resumption LoadBalancerListener#has_session_resumption}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#protocols LoadBalancerListener#protocols}.

---

##### `server_order_preference`<sup>Optional</sup> <a name="server_order_preference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.serverOrderPreference"></a>

```python
server_order_preference: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#server_order_preference LoadBalancerListener#server_order_preference}.

---

##### `trusted_certificate_authority_ids`<sup>Optional</sup> <a name="trusted_certificate_authority_ids" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.trustedCertificateAuthorityIds"></a>

```python
trusted_certificate_authority_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#trusted_certificate_authority_ids LoadBalancerListener#trusted_certificate_authority_ids}.

---

##### `verify_depth`<sup>Optional</sup> <a name="verify_depth" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.verifyDepth"></a>

```python
verify_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#verify_depth LoadBalancerListener#verify_depth}.

---

##### `verify_peer_certificate`<sup>Optional</sup> <a name="verify_peer_certificate" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.verifyPeerCertificate"></a>

```python
verify_peer_certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#verify_peer_certificate LoadBalancerListener#verify_peer_certificate}.

---

### LoadBalancerListenerTimeouts <a name="LoadBalancerListenerTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_listener

loadBalancerListener.LoadBalancerListenerTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#create LoadBalancerListener#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#delete LoadBalancerListener#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#update LoadBalancerListener#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#create LoadBalancerListener#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#delete LoadBalancerListener#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#update LoadBalancerListener#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerListenerConnectionConfigurationOutputReference <a name="LoadBalancerListenerConnectionConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_listener

loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resetBackendTcpProxyProtocolOptions">reset_backend_tcp_proxy_protocol_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resetBackendTcpProxyProtocolVersion">reset_backend_tcp_proxy_protocol_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backend_tcp_proxy_protocol_options` <a name="reset_backend_tcp_proxy_protocol_options" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resetBackendTcpProxyProtocolOptions"></a>

```python
def reset_backend_tcp_proxy_protocol_options() -> None
```

##### `reset_backend_tcp_proxy_protocol_version` <a name="reset_backend_tcp_proxy_protocol_version" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resetBackendTcpProxyProtocolVersion"></a>

```python
def reset_backend_tcp_proxy_protocol_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolOptionsInput">backend_tcp_proxy_protocol_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolVersionInput">backend_tcp_proxy_protocol_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.idleTimeoutInSecondsInput">idle_timeout_in_seconds_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolOptions">backend_tcp_proxy_protocol_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolVersion">backend_tcp_proxy_protocol_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.idleTimeoutInSeconds">idle_timeout_in_seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backend_tcp_proxy_protocol_options_input`<sup>Optional</sup> <a name="backend_tcp_proxy_protocol_options_input" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolOptionsInput"></a>

```python
backend_tcp_proxy_protocol_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backend_tcp_proxy_protocol_version_input`<sup>Optional</sup> <a name="backend_tcp_proxy_protocol_version_input" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolVersionInput"></a>

```python
backend_tcp_proxy_protocol_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `idle_timeout_in_seconds_input`<sup>Optional</sup> <a name="idle_timeout_in_seconds_input" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.idleTimeoutInSecondsInput"></a>

```python
idle_timeout_in_seconds_input: str
```

- *Type:* str

---

##### `backend_tcp_proxy_protocol_options`<sup>Required</sup> <a name="backend_tcp_proxy_protocol_options" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolOptions"></a>

```python
backend_tcp_proxy_protocol_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backend_tcp_proxy_protocol_version`<sup>Required</sup> <a name="backend_tcp_proxy_protocol_version" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolVersion"></a>

```python
backend_tcp_proxy_protocol_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `idle_timeout_in_seconds`<sup>Required</sup> <a name="idle_timeout_in_seconds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.idleTimeoutInSeconds"></a>

```python
idle_timeout_in_seconds: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: LoadBalancerListenerConnectionConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a>

---


### LoadBalancerListenerSslConfigurationOutputReference <a name="LoadBalancerListenerSslConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_listener

loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCertificateIds">reset_certificate_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCertificateName">reset_certificate_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCipherSuiteName">reset_cipher_suite_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetHasSessionResumption">reset_has_session_resumption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetProtocols">reset_protocols</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetServerOrderPreference">reset_server_order_preference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetTrustedCertificateAuthorityIds">reset_trusted_certificate_authority_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetVerifyDepth">reset_verify_depth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetVerifyPeerCertificate">reset_verify_peer_certificate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_ids` <a name="reset_certificate_ids" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCertificateIds"></a>

```python
def reset_certificate_ids() -> None
```

##### `reset_certificate_name` <a name="reset_certificate_name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCertificateName"></a>

```python
def reset_certificate_name() -> None
```

##### `reset_cipher_suite_name` <a name="reset_cipher_suite_name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCipherSuiteName"></a>

```python
def reset_cipher_suite_name() -> None
```

##### `reset_has_session_resumption` <a name="reset_has_session_resumption" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetHasSessionResumption"></a>

```python
def reset_has_session_resumption() -> None
```

##### `reset_protocols` <a name="reset_protocols" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetProtocols"></a>

```python
def reset_protocols() -> None
```

##### `reset_server_order_preference` <a name="reset_server_order_preference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetServerOrderPreference"></a>

```python
def reset_server_order_preference() -> None
```

##### `reset_trusted_certificate_authority_ids` <a name="reset_trusted_certificate_authority_ids" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetTrustedCertificateAuthorityIds"></a>

```python
def reset_trusted_certificate_authority_ids() -> None
```

##### `reset_verify_depth` <a name="reset_verify_depth" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetVerifyDepth"></a>

```python
def reset_verify_depth() -> None
```

##### `reset_verify_peer_certificate` <a name="reset_verify_peer_certificate" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetVerifyPeerCertificate"></a>

```python
def reset_verify_peer_certificate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateIdsInput">certificate_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateNameInput">certificate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.cipherSuiteNameInput">cipher_suite_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.hasSessionResumptionInput">has_session_resumption_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.protocolsInput">protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.serverOrderPreferenceInput">server_order_preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.trustedCertificateAuthorityIdsInput">trusted_certificate_authority_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyDepthInput">verify_depth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyPeerCertificateInput">verify_peer_certificate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateIds">certificate_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateName">certificate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.cipherSuiteName">cipher_suite_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.hasSessionResumption">has_session_resumption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.serverOrderPreference">server_order_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.trustedCertificateAuthorityIds">trusted_certificate_authority_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyDepth">verify_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyPeerCertificate">verify_peer_certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_ids_input`<sup>Optional</sup> <a name="certificate_ids_input" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateIdsInput"></a>

```python
certificate_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `certificate_name_input`<sup>Optional</sup> <a name="certificate_name_input" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateNameInput"></a>

```python
certificate_name_input: str
```

- *Type:* str

---

##### `cipher_suite_name_input`<sup>Optional</sup> <a name="cipher_suite_name_input" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.cipherSuiteNameInput"></a>

```python
cipher_suite_name_input: str
```

- *Type:* str

---

##### `has_session_resumption_input`<sup>Optional</sup> <a name="has_session_resumption_input" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.hasSessionResumptionInput"></a>

```python
has_session_resumption_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `protocols_input`<sup>Optional</sup> <a name="protocols_input" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.protocolsInput"></a>

```python
protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `server_order_preference_input`<sup>Optional</sup> <a name="server_order_preference_input" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.serverOrderPreferenceInput"></a>

```python
server_order_preference_input: str
```

- *Type:* str

---

##### `trusted_certificate_authority_ids_input`<sup>Optional</sup> <a name="trusted_certificate_authority_ids_input" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.trustedCertificateAuthorityIdsInput"></a>

```python
trusted_certificate_authority_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verify_depth_input`<sup>Optional</sup> <a name="verify_depth_input" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyDepthInput"></a>

```python
verify_depth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `verify_peer_certificate_input`<sup>Optional</sup> <a name="verify_peer_certificate_input" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyPeerCertificateInput"></a>

```python
verify_peer_certificate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `certificate_ids`<sup>Required</sup> <a name="certificate_ids" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateIds"></a>

```python
certificate_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `certificate_name`<sup>Required</sup> <a name="certificate_name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

---

##### `cipher_suite_name`<sup>Required</sup> <a name="cipher_suite_name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.cipherSuiteName"></a>

```python
cipher_suite_name: str
```

- *Type:* str

---

##### `has_session_resumption`<sup>Required</sup> <a name="has_session_resumption" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.hasSessionResumption"></a>

```python
has_session_resumption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `server_order_preference`<sup>Required</sup> <a name="server_order_preference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.serverOrderPreference"></a>

```python
server_order_preference: str
```

- *Type:* str

---

##### `trusted_certificate_authority_ids`<sup>Required</sup> <a name="trusted_certificate_authority_ids" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.trustedCertificateAuthorityIds"></a>

```python
trusted_certificate_authority_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verify_depth`<sup>Required</sup> <a name="verify_depth" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyDepth"></a>

```python
verify_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `verify_peer_certificate`<sup>Required</sup> <a name="verify_peer_certificate" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyPeerCertificate"></a>

```python
verify_peer_certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: LoadBalancerListenerSslConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a>

---


### LoadBalancerListenerTimeoutsOutputReference <a name="LoadBalancerListenerTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_listener

loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LoadBalancerListenerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a>]

---



