# `loadBalancerBackendset` Submodule <a name="`loadBalancerBackendset` Submodule" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerBackendset <a name="LoadBalancerBackendset" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset oci_load_balancer_backendset}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_backendset

loadBalancerBackendset.LoadBalancerBackendset(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  health_checker: LoadBalancerBackendsetHealthChecker,
  load_balancer_id: str,
  name: str,
  policy: str,
  backend_max_connections: typing.Union[int, float] = None,
  id: str = None,
  lb_cookie_session_persistence_configuration: LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration = None,
  session_persistence_configuration: LoadBalancerBackendsetSessionPersistenceConfiguration = None,
  ssl_configuration: LoadBalancerBackendsetSslConfiguration = None,
  timeouts: LoadBalancerBackendsetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.healthChecker">health_checker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a></code> | health_checker block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#load_balancer_id LoadBalancerBackendset#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#name LoadBalancerBackendset#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#policy LoadBalancerBackendset#policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.backendMaxConnections">backend_max_connections</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#backend_max_connections LoadBalancerBackendset#backend_max_connections}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#id LoadBalancerBackendset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.lbCookieSessionPersistenceConfiguration">lb_cookie_session_persistence_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a></code> | lb_cookie_session_persistence_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.sessionPersistenceConfiguration">session_persistence_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a></code> | session_persistence_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.sslConfiguration">ssl_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a></code> | ssl_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `health_checker`<sup>Required</sup> <a name="health_checker" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.healthChecker"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a>

health_checker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#health_checker LoadBalancerBackendset#health_checker}

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.loadBalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#load_balancer_id LoadBalancerBackendset#load_balancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#name LoadBalancerBackendset#name}.

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.policy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#policy LoadBalancerBackendset#policy}.

---

##### `backend_max_connections`<sup>Optional</sup> <a name="backend_max_connections" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.backendMaxConnections"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#backend_max_connections LoadBalancerBackendset#backend_max_connections}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#id LoadBalancerBackendset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lb_cookie_session_persistence_configuration`<sup>Optional</sup> <a name="lb_cookie_session_persistence_configuration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.lbCookieSessionPersistenceConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a>

lb_cookie_session_persistence_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#lb_cookie_session_persistence_configuration LoadBalancerBackendset#lb_cookie_session_persistence_configuration}

---

##### `session_persistence_configuration`<sup>Optional</sup> <a name="session_persistence_configuration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.sessionPersistenceConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a>

session_persistence_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#session_persistence_configuration LoadBalancerBackendset#session_persistence_configuration}

---

##### `ssl_configuration`<sup>Optional</sup> <a name="ssl_configuration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.sslConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a>

ssl_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#ssl_configuration LoadBalancerBackendset#ssl_configuration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#timeouts LoadBalancerBackendset#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putHealthChecker">put_health_checker</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putLbCookieSessionPersistenceConfiguration">put_lb_cookie_session_persistence_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSessionPersistenceConfiguration">put_session_persistence_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSslConfiguration">put_ssl_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetBackendMaxConnections">reset_backend_max_connections</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetLbCookieSessionPersistenceConfiguration">reset_lb_cookie_session_persistence_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetSessionPersistenceConfiguration">reset_session_persistence_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetSslConfiguration">reset_ssl_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_health_checker` <a name="put_health_checker" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putHealthChecker"></a>

```python
def put_health_checker(
  protocol: str,
  interval_ms: typing.Union[int, float] = None,
  is_force_plain_text: typing.Union[bool, IResolvable] = None,
  port: typing.Union[int, float] = None,
  response_body_regex: str = None,
  retries: typing.Union[int, float] = None,
  return_code: typing.Union[int, float] = None,
  timeout_in_millis: typing.Union[int, float] = None,
  url_path: str = None
) -> None
```

###### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putHealthChecker.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#protocol LoadBalancerBackendset#protocol}.

---

###### `interval_ms`<sup>Optional</sup> <a name="interval_ms" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putHealthChecker.parameter.intervalMs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#interval_ms LoadBalancerBackendset#interval_ms}.

---

###### `is_force_plain_text`<sup>Optional</sup> <a name="is_force_plain_text" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putHealthChecker.parameter.isForcePlainText"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_force_plain_text LoadBalancerBackendset#is_force_plain_text}.

---

###### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putHealthChecker.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#port LoadBalancerBackendset#port}.

---

###### `response_body_regex`<sup>Optional</sup> <a name="response_body_regex" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putHealthChecker.parameter.responseBodyRegex"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#response_body_regex LoadBalancerBackendset#response_body_regex}.

---

###### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putHealthChecker.parameter.retries"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#retries LoadBalancerBackendset#retries}.

---

###### `return_code`<sup>Optional</sup> <a name="return_code" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putHealthChecker.parameter.returnCode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#return_code LoadBalancerBackendset#return_code}.

---

###### `timeout_in_millis`<sup>Optional</sup> <a name="timeout_in_millis" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putHealthChecker.parameter.timeoutInMillis"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#timeout_in_millis LoadBalancerBackendset#timeout_in_millis}.

---

###### `url_path`<sup>Optional</sup> <a name="url_path" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putHealthChecker.parameter.urlPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#url_path LoadBalancerBackendset#url_path}.

---

##### `put_lb_cookie_session_persistence_configuration` <a name="put_lb_cookie_session_persistence_configuration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putLbCookieSessionPersistenceConfiguration"></a>

```python
def put_lb_cookie_session_persistence_configuration(
  cookie_name: str = None,
  disable_fallback: typing.Union[bool, IResolvable] = None,
  domain: str = None,
  is_http_only: typing.Union[bool, IResolvable] = None,
  is_secure: typing.Union[bool, IResolvable] = None,
  max_age_in_seconds: typing.Union[int, float] = None,
  path: str = None
) -> None
```

###### `cookie_name`<sup>Optional</sup> <a name="cookie_name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putLbCookieSessionPersistenceConfiguration.parameter.cookieName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cookie_name LoadBalancerBackendset#cookie_name}.

---

###### `disable_fallback`<sup>Optional</sup> <a name="disable_fallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putLbCookieSessionPersistenceConfiguration.parameter.disableFallback"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#disable_fallback LoadBalancerBackendset#disable_fallback}.

---

###### `domain`<sup>Optional</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putLbCookieSessionPersistenceConfiguration.parameter.domain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#domain LoadBalancerBackendset#domain}.

---

###### `is_http_only`<sup>Optional</sup> <a name="is_http_only" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putLbCookieSessionPersistenceConfiguration.parameter.isHttpOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_http_only LoadBalancerBackendset#is_http_only}.

---

###### `is_secure`<sup>Optional</sup> <a name="is_secure" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putLbCookieSessionPersistenceConfiguration.parameter.isSecure"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_secure LoadBalancerBackendset#is_secure}.

---

###### `max_age_in_seconds`<sup>Optional</sup> <a name="max_age_in_seconds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putLbCookieSessionPersistenceConfiguration.parameter.maxAgeInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#max_age_in_seconds LoadBalancerBackendset#max_age_in_seconds}.

---

###### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putLbCookieSessionPersistenceConfiguration.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#path LoadBalancerBackendset#path}.

---

##### `put_session_persistence_configuration` <a name="put_session_persistence_configuration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSessionPersistenceConfiguration"></a>

```python
def put_session_persistence_configuration(
  cookie_name: str,
  disable_fallback: typing.Union[bool, IResolvable] = None
) -> None
```

###### `cookie_name`<sup>Required</sup> <a name="cookie_name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSessionPersistenceConfiguration.parameter.cookieName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cookie_name LoadBalancerBackendset#cookie_name}.

---

###### `disable_fallback`<sup>Optional</sup> <a name="disable_fallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSessionPersistenceConfiguration.parameter.disableFallback"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#disable_fallback LoadBalancerBackendset#disable_fallback}.

---

##### `put_ssl_configuration` <a name="put_ssl_configuration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSslConfiguration"></a>

```python
def put_ssl_configuration(
  certificate_ids: typing.List[str] = None,
  certificate_name: str = None,
  cipher_suite_name: str = None,
  protocols: typing.List[str] = None,
  server_order_preference: str = None,
  trusted_certificate_authority_ids: typing.List[str] = None,
  verify_depth: typing.Union[int, float] = None,
  verify_peer_certificate: typing.Union[bool, IResolvable] = None
) -> None
```

###### `certificate_ids`<sup>Optional</sup> <a name="certificate_ids" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSslConfiguration.parameter.certificateIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#certificate_ids LoadBalancerBackendset#certificate_ids}.

---

###### `certificate_name`<sup>Optional</sup> <a name="certificate_name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSslConfiguration.parameter.certificateName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#certificate_name LoadBalancerBackendset#certificate_name}.

---

###### `cipher_suite_name`<sup>Optional</sup> <a name="cipher_suite_name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSslConfiguration.parameter.cipherSuiteName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cipher_suite_name LoadBalancerBackendset#cipher_suite_name}.

---

###### `protocols`<sup>Optional</sup> <a name="protocols" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSslConfiguration.parameter.protocols"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#protocols LoadBalancerBackendset#protocols}.

---

###### `server_order_preference`<sup>Optional</sup> <a name="server_order_preference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSslConfiguration.parameter.serverOrderPreference"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#server_order_preference LoadBalancerBackendset#server_order_preference}.

---

###### `trusted_certificate_authority_ids`<sup>Optional</sup> <a name="trusted_certificate_authority_ids" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSslConfiguration.parameter.trustedCertificateAuthorityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#trusted_certificate_authority_ids LoadBalancerBackendset#trusted_certificate_authority_ids}.

---

###### `verify_depth`<sup>Optional</sup> <a name="verify_depth" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSslConfiguration.parameter.verifyDepth"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#verify_depth LoadBalancerBackendset#verify_depth}.

---

###### `verify_peer_certificate`<sup>Optional</sup> <a name="verify_peer_certificate" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSslConfiguration.parameter.verifyPeerCertificate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#verify_peer_certificate LoadBalancerBackendset#verify_peer_certificate}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#create LoadBalancerBackendset#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#delete LoadBalancerBackendset#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#update LoadBalancerBackendset#update}.

---

##### `reset_backend_max_connections` <a name="reset_backend_max_connections" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetBackendMaxConnections"></a>

```python
def reset_backend_max_connections() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_lb_cookie_session_persistence_configuration` <a name="reset_lb_cookie_session_persistence_configuration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetLbCookieSessionPersistenceConfiguration"></a>

```python
def reset_lb_cookie_session_persistence_configuration() -> None
```

##### `reset_session_persistence_configuration` <a name="reset_session_persistence_configuration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetSessionPersistenceConfiguration"></a>

```python
def reset_session_persistence_configuration() -> None
```

##### `reset_ssl_configuration` <a name="reset_ssl_configuration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetSslConfiguration"></a>

```python
def reset_ssl_configuration() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LoadBalancerBackendset resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_backendset

loadBalancerBackendset.LoadBalancerBackendset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_backendset

loadBalancerBackendset.LoadBalancerBackendset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_backendset

loadBalancerBackendset.LoadBalancerBackendset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_backendset

loadBalancerBackendset.LoadBalancerBackendset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LoadBalancerBackendset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LoadBalancerBackendset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LoadBalancerBackendset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancerBackendset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backend">backend</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList">LoadBalancerBackendsetBackendList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.healthChecker">health_checker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference">LoadBalancerBackendsetHealthCheckerOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lbCookieSessionPersistenceConfiguration">lb_cookie_session_persistence_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference">LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sessionPersistenceConfiguration">session_persistence_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference">LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sslConfiguration">ssl_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference">LoadBalancerBackendsetSslConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference">LoadBalancerBackendsetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backendMaxConnectionsInput">backend_max_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.healthCheckerInput">health_checker_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lbCookieSessionPersistenceConfigurationInput">lb_cookie_session_persistence_configuration_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.loadBalancerIdInput">load_balancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sessionPersistenceConfigurationInput">session_persistence_configuration_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sslConfigurationInput">ssl_configuration_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backendMaxConnections">backend_max_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.policy">policy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backend"></a>

```python
backend: LoadBalancerBackendsetBackendList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList">LoadBalancerBackendsetBackendList</a>

---

##### `health_checker`<sup>Required</sup> <a name="health_checker" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.healthChecker"></a>

```python
health_checker: LoadBalancerBackendsetHealthCheckerOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference">LoadBalancerBackendsetHealthCheckerOutputReference</a>

---

##### `lb_cookie_session_persistence_configuration`<sup>Required</sup> <a name="lb_cookie_session_persistence_configuration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lbCookieSessionPersistenceConfiguration"></a>

```python
lb_cookie_session_persistence_configuration: LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference">LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference</a>

---

##### `session_persistence_configuration`<sup>Required</sup> <a name="session_persistence_configuration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sessionPersistenceConfiguration"></a>

```python
session_persistence_configuration: LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference">LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference</a>

---

##### `ssl_configuration`<sup>Required</sup> <a name="ssl_configuration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sslConfiguration"></a>

```python
ssl_configuration: LoadBalancerBackendsetSslConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference">LoadBalancerBackendsetSslConfigurationOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.timeouts"></a>

```python
timeouts: LoadBalancerBackendsetTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference">LoadBalancerBackendsetTimeoutsOutputReference</a>

---

##### `backend_max_connections_input`<sup>Optional</sup> <a name="backend_max_connections_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backendMaxConnectionsInput"></a>

```python
backend_max_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_checker_input`<sup>Optional</sup> <a name="health_checker_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.healthCheckerInput"></a>

```python
health_checker_input: LoadBalancerBackendsetHealthChecker
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lb_cookie_session_persistence_configuration_input`<sup>Optional</sup> <a name="lb_cookie_session_persistence_configuration_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lbCookieSessionPersistenceConfigurationInput"></a>

```python
lb_cookie_session_persistence_configuration_input: LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a>

---

##### `load_balancer_id_input`<sup>Optional</sup> <a name="load_balancer_id_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.loadBalancerIdInput"></a>

```python
load_balancer_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `session_persistence_configuration_input`<sup>Optional</sup> <a name="session_persistence_configuration_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sessionPersistenceConfigurationInput"></a>

```python
session_persistence_configuration_input: LoadBalancerBackendsetSessionPersistenceConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a>

---

##### `ssl_configuration_input`<sup>Optional</sup> <a name="ssl_configuration_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sslConfigurationInput"></a>

```python
ssl_configuration_input: LoadBalancerBackendsetSslConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LoadBalancerBackendsetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a>]

---

##### `backend_max_connections`<sup>Required</sup> <a name="backend_max_connections" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backendMaxConnections"></a>

```python
backend_max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerBackendsetBackend <a name="LoadBalancerBackendsetBackend" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackend"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackend.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_backendset

loadBalancerBackendset.LoadBalancerBackendsetBackend()
```


### LoadBalancerBackendsetConfig <a name="LoadBalancerBackendsetConfig" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_backendset

loadBalancerBackendset.LoadBalancerBackendsetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  health_checker: LoadBalancerBackendsetHealthChecker,
  load_balancer_id: str,
  name: str,
  policy: str,
  backend_max_connections: typing.Union[int, float] = None,
  id: str = None,
  lb_cookie_session_persistence_configuration: LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration = None,
  session_persistence_configuration: LoadBalancerBackendsetSessionPersistenceConfiguration = None,
  ssl_configuration: LoadBalancerBackendsetSslConfiguration = None,
  timeouts: LoadBalancerBackendsetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.healthChecker">health_checker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a></code> | health_checker block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#load_balancer_id LoadBalancerBackendset#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#name LoadBalancerBackendset#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#policy LoadBalancerBackendset#policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.backendMaxConnections">backend_max_connections</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#backend_max_connections LoadBalancerBackendset#backend_max_connections}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#id LoadBalancerBackendset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.lbCookieSessionPersistenceConfiguration">lb_cookie_session_persistence_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a></code> | lb_cookie_session_persistence_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.sessionPersistenceConfiguration">session_persistence_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a></code> | session_persistence_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.sslConfiguration">ssl_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a></code> | ssl_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `health_checker`<sup>Required</sup> <a name="health_checker" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.healthChecker"></a>

```python
health_checker: LoadBalancerBackendsetHealthChecker
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a>

health_checker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#health_checker LoadBalancerBackendset#health_checker}

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#load_balancer_id LoadBalancerBackendset#load_balancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#name LoadBalancerBackendset#name}.

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.policy"></a>

```python
policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#policy LoadBalancerBackendset#policy}.

---

##### `backend_max_connections`<sup>Optional</sup> <a name="backend_max_connections" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.backendMaxConnections"></a>

```python
backend_max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#backend_max_connections LoadBalancerBackendset#backend_max_connections}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#id LoadBalancerBackendset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lb_cookie_session_persistence_configuration`<sup>Optional</sup> <a name="lb_cookie_session_persistence_configuration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.lbCookieSessionPersistenceConfiguration"></a>

```python
lb_cookie_session_persistence_configuration: LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a>

lb_cookie_session_persistence_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#lb_cookie_session_persistence_configuration LoadBalancerBackendset#lb_cookie_session_persistence_configuration}

---

##### `session_persistence_configuration`<sup>Optional</sup> <a name="session_persistence_configuration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.sessionPersistenceConfiguration"></a>

```python
session_persistence_configuration: LoadBalancerBackendsetSessionPersistenceConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a>

session_persistence_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#session_persistence_configuration LoadBalancerBackendset#session_persistence_configuration}

---

##### `ssl_configuration`<sup>Optional</sup> <a name="ssl_configuration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.sslConfiguration"></a>

```python
ssl_configuration: LoadBalancerBackendsetSslConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a>

ssl_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#ssl_configuration LoadBalancerBackendset#ssl_configuration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.timeouts"></a>

```python
timeouts: LoadBalancerBackendsetTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#timeouts LoadBalancerBackendset#timeouts}

---

### LoadBalancerBackendsetHealthChecker <a name="LoadBalancerBackendsetHealthChecker" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_backendset

loadBalancerBackendset.LoadBalancerBackendsetHealthChecker(
  protocol: str,
  interval_ms: typing.Union[int, float] = None,
  is_force_plain_text: typing.Union[bool, IResolvable] = None,
  port: typing.Union[int, float] = None,
  response_body_regex: str = None,
  retries: typing.Union[int, float] = None,
  return_code: typing.Union[int, float] = None,
  timeout_in_millis: typing.Union[int, float] = None,
  url_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#protocol LoadBalancerBackendset#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.intervalMs">interval_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#interval_ms LoadBalancerBackendset#interval_ms}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.isForcePlainText">is_force_plain_text</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_force_plain_text LoadBalancerBackendset#is_force_plain_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#port LoadBalancerBackendset#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.responseBodyRegex">response_body_regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#response_body_regex LoadBalancerBackendset#response_body_regex}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#retries LoadBalancerBackendset#retries}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.returnCode">return_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#return_code LoadBalancerBackendset#return_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.timeoutInMillis">timeout_in_millis</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#timeout_in_millis LoadBalancerBackendset#timeout_in_millis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.urlPath">url_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#url_path LoadBalancerBackendset#url_path}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#protocol LoadBalancerBackendset#protocol}.

---

##### `interval_ms`<sup>Optional</sup> <a name="interval_ms" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.intervalMs"></a>

```python
interval_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#interval_ms LoadBalancerBackendset#interval_ms}.

---

##### `is_force_plain_text`<sup>Optional</sup> <a name="is_force_plain_text" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.isForcePlainText"></a>

```python
is_force_plain_text: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_force_plain_text LoadBalancerBackendset#is_force_plain_text}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#port LoadBalancerBackendset#port}.

---

##### `response_body_regex`<sup>Optional</sup> <a name="response_body_regex" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.responseBodyRegex"></a>

```python
response_body_regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#response_body_regex LoadBalancerBackendset#response_body_regex}.

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#retries LoadBalancerBackendset#retries}.

---

##### `return_code`<sup>Optional</sup> <a name="return_code" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.returnCode"></a>

```python
return_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#return_code LoadBalancerBackendset#return_code}.

---

##### `timeout_in_millis`<sup>Optional</sup> <a name="timeout_in_millis" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.timeoutInMillis"></a>

```python
timeout_in_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#timeout_in_millis LoadBalancerBackendset#timeout_in_millis}.

---

##### `url_path`<sup>Optional</sup> <a name="url_path" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.urlPath"></a>

```python
url_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#url_path LoadBalancerBackendset#url_path}.

---

### LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration <a name="LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_backendset

loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration(
  cookie_name: str = None,
  disable_fallback: typing.Union[bool, IResolvable] = None,
  domain: str = None,
  is_http_only: typing.Union[bool, IResolvable] = None,
  is_secure: typing.Union[bool, IResolvable] = None,
  max_age_in_seconds: typing.Union[int, float] = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.cookieName">cookie_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cookie_name LoadBalancerBackendset#cookie_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.disableFallback">disable_fallback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#disable_fallback LoadBalancerBackendset#disable_fallback}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#domain LoadBalancerBackendset#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.isHttpOnly">is_http_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_http_only LoadBalancerBackendset#is_http_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.isSecure">is_secure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_secure LoadBalancerBackendset#is_secure}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.maxAgeInSeconds">max_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#max_age_in_seconds LoadBalancerBackendset#max_age_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#path LoadBalancerBackendset#path}. |

---

##### `cookie_name`<sup>Optional</sup> <a name="cookie_name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.cookieName"></a>

```python
cookie_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cookie_name LoadBalancerBackendset#cookie_name}.

---

##### `disable_fallback`<sup>Optional</sup> <a name="disable_fallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.disableFallback"></a>

```python
disable_fallback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#disable_fallback LoadBalancerBackendset#disable_fallback}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.domain"></a>

```python
domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#domain LoadBalancerBackendset#domain}.

---

##### `is_http_only`<sup>Optional</sup> <a name="is_http_only" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.isHttpOnly"></a>

```python
is_http_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_http_only LoadBalancerBackendset#is_http_only}.

---

##### `is_secure`<sup>Optional</sup> <a name="is_secure" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.isSecure"></a>

```python
is_secure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_secure LoadBalancerBackendset#is_secure}.

---

##### `max_age_in_seconds`<sup>Optional</sup> <a name="max_age_in_seconds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.maxAgeInSeconds"></a>

```python
max_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#max_age_in_seconds LoadBalancerBackendset#max_age_in_seconds}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#path LoadBalancerBackendset#path}.

---

### LoadBalancerBackendsetSessionPersistenceConfiguration <a name="LoadBalancerBackendsetSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_backendset

loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration(
  cookie_name: str,
  disable_fallback: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration.property.cookieName">cookie_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cookie_name LoadBalancerBackendset#cookie_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration.property.disableFallback">disable_fallback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#disable_fallback LoadBalancerBackendset#disable_fallback}. |

---

##### `cookie_name`<sup>Required</sup> <a name="cookie_name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration.property.cookieName"></a>

```python
cookie_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cookie_name LoadBalancerBackendset#cookie_name}.

---

##### `disable_fallback`<sup>Optional</sup> <a name="disable_fallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration.property.disableFallback"></a>

```python
disable_fallback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#disable_fallback LoadBalancerBackendset#disable_fallback}.

---

### LoadBalancerBackendsetSslConfiguration <a name="LoadBalancerBackendsetSslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_backendset

loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration(
  certificate_ids: typing.List[str] = None,
  certificate_name: str = None,
  cipher_suite_name: str = None,
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
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.certificateIds">certificate_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#certificate_ids LoadBalancerBackendset#certificate_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.certificateName">certificate_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#certificate_name LoadBalancerBackendset#certificate_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.cipherSuiteName">cipher_suite_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cipher_suite_name LoadBalancerBackendset#cipher_suite_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#protocols LoadBalancerBackendset#protocols}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.serverOrderPreference">server_order_preference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#server_order_preference LoadBalancerBackendset#server_order_preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.trustedCertificateAuthorityIds">trusted_certificate_authority_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#trusted_certificate_authority_ids LoadBalancerBackendset#trusted_certificate_authority_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.verifyDepth">verify_depth</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#verify_depth LoadBalancerBackendset#verify_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.verifyPeerCertificate">verify_peer_certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#verify_peer_certificate LoadBalancerBackendset#verify_peer_certificate}. |

---

##### `certificate_ids`<sup>Optional</sup> <a name="certificate_ids" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.certificateIds"></a>

```python
certificate_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#certificate_ids LoadBalancerBackendset#certificate_ids}.

---

##### `certificate_name`<sup>Optional</sup> <a name="certificate_name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#certificate_name LoadBalancerBackendset#certificate_name}.

---

##### `cipher_suite_name`<sup>Optional</sup> <a name="cipher_suite_name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.cipherSuiteName"></a>

```python
cipher_suite_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cipher_suite_name LoadBalancerBackendset#cipher_suite_name}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#protocols LoadBalancerBackendset#protocols}.

---

##### `server_order_preference`<sup>Optional</sup> <a name="server_order_preference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.serverOrderPreference"></a>

```python
server_order_preference: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#server_order_preference LoadBalancerBackendset#server_order_preference}.

---

##### `trusted_certificate_authority_ids`<sup>Optional</sup> <a name="trusted_certificate_authority_ids" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.trustedCertificateAuthorityIds"></a>

```python
trusted_certificate_authority_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#trusted_certificate_authority_ids LoadBalancerBackendset#trusted_certificate_authority_ids}.

---

##### `verify_depth`<sup>Optional</sup> <a name="verify_depth" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.verifyDepth"></a>

```python
verify_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#verify_depth LoadBalancerBackendset#verify_depth}.

---

##### `verify_peer_certificate`<sup>Optional</sup> <a name="verify_peer_certificate" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.verifyPeerCertificate"></a>

```python
verify_peer_certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#verify_peer_certificate LoadBalancerBackendset#verify_peer_certificate}.

---

### LoadBalancerBackendsetTimeouts <a name="LoadBalancerBackendsetTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_backendset

loadBalancerBackendset.LoadBalancerBackendsetTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#create LoadBalancerBackendset#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#delete LoadBalancerBackendset#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#update LoadBalancerBackendset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#create LoadBalancerBackendset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#delete LoadBalancerBackendset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#update LoadBalancerBackendset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerBackendsetBackendList <a name="LoadBalancerBackendsetBackendList" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_backendset

loadBalancerBackendset.LoadBalancerBackendsetBackendList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LoadBalancerBackendsetBackendOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### LoadBalancerBackendsetBackendOutputReference <a name="LoadBalancerBackendsetBackendOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_backendset

loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.backup">backup</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.drain">drain</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.maxConnections">max_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.offline">offline</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackend">LoadBalancerBackendsetBackend</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup`<sup>Required</sup> <a name="backup" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.backup"></a>

```python
backup: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `drain`<sup>Required</sup> <a name="drain" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.drain"></a>

```python
drain: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `max_connections`<sup>Required</sup> <a name="max_connections" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.maxConnections"></a>

```python
max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `offline`<sup>Required</sup> <a name="offline" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.offline"></a>

```python
offline: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.internalValue"></a>

```python
internal_value: LoadBalancerBackendsetBackend
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackend">LoadBalancerBackendsetBackend</a>

---


### LoadBalancerBackendsetHealthCheckerOutputReference <a name="LoadBalancerBackendsetHealthCheckerOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_backendset

loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetIntervalMs">reset_interval_ms</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetIsForcePlainText">reset_is_force_plain_text</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetResponseBodyRegex">reset_response_body_regex</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetRetries">reset_retries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetReturnCode">reset_return_code</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetTimeoutInMillis">reset_timeout_in_millis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetUrlPath">reset_url_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_interval_ms` <a name="reset_interval_ms" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetIntervalMs"></a>

```python
def reset_interval_ms() -> None
```

##### `reset_is_force_plain_text` <a name="reset_is_force_plain_text" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetIsForcePlainText"></a>

```python
def reset_is_force_plain_text() -> None
```

##### `reset_port` <a name="reset_port" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_response_body_regex` <a name="reset_response_body_regex" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetResponseBodyRegex"></a>

```python
def reset_response_body_regex() -> None
```

##### `reset_retries` <a name="reset_retries" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetRetries"></a>

```python
def reset_retries() -> None
```

##### `reset_return_code` <a name="reset_return_code" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetReturnCode"></a>

```python
def reset_return_code() -> None
```

##### `reset_timeout_in_millis` <a name="reset_timeout_in_millis" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetTimeoutInMillis"></a>

```python
def reset_timeout_in_millis() -> None
```

##### `reset_url_path` <a name="reset_url_path" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetUrlPath"></a>

```python
def reset_url_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.intervalMsInput">interval_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.isForcePlainTextInput">is_force_plain_text_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.responseBodyRegexInput">response_body_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.retriesInput">retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.returnCodeInput">return_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.timeoutInMillisInput">timeout_in_millis_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.urlPathInput">url_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.intervalMs">interval_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.isForcePlainText">is_force_plain_text</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.responseBodyRegex">response_body_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.returnCode">return_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.timeoutInMillis">timeout_in_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.urlPath">url_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interval_ms_input`<sup>Optional</sup> <a name="interval_ms_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.intervalMsInput"></a>

```python
interval_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_force_plain_text_input`<sup>Optional</sup> <a name="is_force_plain_text_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.isForcePlainTextInput"></a>

```python
is_force_plain_text_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `response_body_regex_input`<sup>Optional</sup> <a name="response_body_regex_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.responseBodyRegexInput"></a>

```python
response_body_regex_input: str
```

- *Type:* str

---

##### `retries_input`<sup>Optional</sup> <a name="retries_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.retriesInput"></a>

```python
retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `return_code_input`<sup>Optional</sup> <a name="return_code_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.returnCodeInput"></a>

```python
return_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_millis_input`<sup>Optional</sup> <a name="timeout_in_millis_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.timeoutInMillisInput"></a>

```python
timeout_in_millis_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `url_path_input`<sup>Optional</sup> <a name="url_path_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.urlPathInput"></a>

```python
url_path_input: str
```

- *Type:* str

---

##### `interval_ms`<sup>Required</sup> <a name="interval_ms" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.intervalMs"></a>

```python
interval_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_force_plain_text`<sup>Required</sup> <a name="is_force_plain_text" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.isForcePlainText"></a>

```python
is_force_plain_text: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `response_body_regex`<sup>Required</sup> <a name="response_body_regex" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.responseBodyRegex"></a>

```python
response_body_regex: str
```

- *Type:* str

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `return_code`<sup>Required</sup> <a name="return_code" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.returnCode"></a>

```python
return_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_millis`<sup>Required</sup> <a name="timeout_in_millis" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.timeoutInMillis"></a>

```python
timeout_in_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `url_path`<sup>Required</sup> <a name="url_path" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.urlPath"></a>

```python
url_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.internalValue"></a>

```python
internal_value: LoadBalancerBackendsetHealthChecker
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a>

---


### LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference <a name="LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_backendset

loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetCookieName">reset_cookie_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetDisableFallback">reset_disable_fallback</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetIsHttpOnly">reset_is_http_only</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetIsSecure">reset_is_secure</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetMaxAgeInSeconds">reset_max_age_in_seconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cookie_name` <a name="reset_cookie_name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetCookieName"></a>

```python
def reset_cookie_name() -> None
```

##### `reset_disable_fallback` <a name="reset_disable_fallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetDisableFallback"></a>

```python
def reset_disable_fallback() -> None
```

##### `reset_domain` <a name="reset_domain" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_is_http_only` <a name="reset_is_http_only" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetIsHttpOnly"></a>

```python
def reset_is_http_only() -> None
```

##### `reset_is_secure` <a name="reset_is_secure" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetIsSecure"></a>

```python
def reset_is_secure() -> None
```

##### `reset_max_age_in_seconds` <a name="reset_max_age_in_seconds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetMaxAgeInSeconds"></a>

```python
def reset_max_age_in_seconds() -> None
```

##### `reset_path` <a name="reset_path" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.cookieNameInput">cookie_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.disableFallbackInput">disable_fallback_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isHttpOnlyInput">is_http_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isSecureInput">is_secure_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.maxAgeInSecondsInput">max_age_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.cookieName">cookie_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.disableFallback">disable_fallback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isHttpOnly">is_http_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isSecure">is_secure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.maxAgeInSeconds">max_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cookie_name_input`<sup>Optional</sup> <a name="cookie_name_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.cookieNameInput"></a>

```python
cookie_name_input: str
```

- *Type:* str

---

##### `disable_fallback_input`<sup>Optional</sup> <a name="disable_fallback_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.disableFallbackInput"></a>

```python
disable_fallback_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `is_http_only_input`<sup>Optional</sup> <a name="is_http_only_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isHttpOnlyInput"></a>

```python
is_http_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_secure_input`<sup>Optional</sup> <a name="is_secure_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isSecureInput"></a>

```python
is_secure_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_age_in_seconds_input`<sup>Optional</sup> <a name="max_age_in_seconds_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.maxAgeInSecondsInput"></a>

```python
max_age_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `cookie_name`<sup>Required</sup> <a name="cookie_name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.cookieName"></a>

```python
cookie_name: str
```

- *Type:* str

---

##### `disable_fallback`<sup>Required</sup> <a name="disable_fallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.disableFallback"></a>

```python
disable_fallback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `is_http_only`<sup>Required</sup> <a name="is_http_only" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isHttpOnly"></a>

```python
is_http_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_secure`<sup>Required</sup> <a name="is_secure" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isSecure"></a>

```python
is_secure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_age_in_seconds`<sup>Required</sup> <a name="max_age_in_seconds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.maxAgeInSeconds"></a>

```python
max_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a>

---


### LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference <a name="LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_backendset

loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.resetDisableFallback">reset_disable_fallback</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disable_fallback` <a name="reset_disable_fallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.resetDisableFallback"></a>

```python
def reset_disable_fallback() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.cookieNameInput">cookie_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.disableFallbackInput">disable_fallback_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.cookieName">cookie_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.disableFallback">disable_fallback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cookie_name_input`<sup>Optional</sup> <a name="cookie_name_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.cookieNameInput"></a>

```python
cookie_name_input: str
```

- *Type:* str

---

##### `disable_fallback_input`<sup>Optional</sup> <a name="disable_fallback_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.disableFallbackInput"></a>

```python
disable_fallback_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cookie_name`<sup>Required</sup> <a name="cookie_name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.cookieName"></a>

```python
cookie_name: str
```

- *Type:* str

---

##### `disable_fallback`<sup>Required</sup> <a name="disable_fallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.disableFallback"></a>

```python
disable_fallback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: LoadBalancerBackendsetSessionPersistenceConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a>

---


### LoadBalancerBackendsetSslConfigurationOutputReference <a name="LoadBalancerBackendsetSslConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_backendset

loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCertificateIds">reset_certificate_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCertificateName">reset_certificate_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCipherSuiteName">reset_cipher_suite_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetProtocols">reset_protocols</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetServerOrderPreference">reset_server_order_preference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetTrustedCertificateAuthorityIds">reset_trusted_certificate_authority_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetVerifyDepth">reset_verify_depth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetVerifyPeerCertificate">reset_verify_peer_certificate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_ids` <a name="reset_certificate_ids" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCertificateIds"></a>

```python
def reset_certificate_ids() -> None
```

##### `reset_certificate_name` <a name="reset_certificate_name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCertificateName"></a>

```python
def reset_certificate_name() -> None
```

##### `reset_cipher_suite_name` <a name="reset_cipher_suite_name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCipherSuiteName"></a>

```python
def reset_cipher_suite_name() -> None
```

##### `reset_protocols` <a name="reset_protocols" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetProtocols"></a>

```python
def reset_protocols() -> None
```

##### `reset_server_order_preference` <a name="reset_server_order_preference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetServerOrderPreference"></a>

```python
def reset_server_order_preference() -> None
```

##### `reset_trusted_certificate_authority_ids` <a name="reset_trusted_certificate_authority_ids" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetTrustedCertificateAuthorityIds"></a>

```python
def reset_trusted_certificate_authority_ids() -> None
```

##### `reset_verify_depth` <a name="reset_verify_depth" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetVerifyDepth"></a>

```python
def reset_verify_depth() -> None
```

##### `reset_verify_peer_certificate` <a name="reset_verify_peer_certificate" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetVerifyPeerCertificate"></a>

```python
def reset_verify_peer_certificate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateIdsInput">certificate_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateNameInput">certificate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.cipherSuiteNameInput">cipher_suite_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.protocolsInput">protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.serverOrderPreferenceInput">server_order_preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.trustedCertificateAuthorityIdsInput">trusted_certificate_authority_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyDepthInput">verify_depth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyPeerCertificateInput">verify_peer_certificate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateIds">certificate_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateName">certificate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.cipherSuiteName">cipher_suite_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.serverOrderPreference">server_order_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.trustedCertificateAuthorityIds">trusted_certificate_authority_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyDepth">verify_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyPeerCertificate">verify_peer_certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_ids_input`<sup>Optional</sup> <a name="certificate_ids_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateIdsInput"></a>

```python
certificate_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `certificate_name_input`<sup>Optional</sup> <a name="certificate_name_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateNameInput"></a>

```python
certificate_name_input: str
```

- *Type:* str

---

##### `cipher_suite_name_input`<sup>Optional</sup> <a name="cipher_suite_name_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.cipherSuiteNameInput"></a>

```python
cipher_suite_name_input: str
```

- *Type:* str

---

##### `protocols_input`<sup>Optional</sup> <a name="protocols_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.protocolsInput"></a>

```python
protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `server_order_preference_input`<sup>Optional</sup> <a name="server_order_preference_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.serverOrderPreferenceInput"></a>

```python
server_order_preference_input: str
```

- *Type:* str

---

##### `trusted_certificate_authority_ids_input`<sup>Optional</sup> <a name="trusted_certificate_authority_ids_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.trustedCertificateAuthorityIdsInput"></a>

```python
trusted_certificate_authority_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verify_depth_input`<sup>Optional</sup> <a name="verify_depth_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyDepthInput"></a>

```python
verify_depth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `verify_peer_certificate_input`<sup>Optional</sup> <a name="verify_peer_certificate_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyPeerCertificateInput"></a>

```python
verify_peer_certificate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `certificate_ids`<sup>Required</sup> <a name="certificate_ids" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateIds"></a>

```python
certificate_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `certificate_name`<sup>Required</sup> <a name="certificate_name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

---

##### `cipher_suite_name`<sup>Required</sup> <a name="cipher_suite_name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.cipherSuiteName"></a>

```python
cipher_suite_name: str
```

- *Type:* str

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `server_order_preference`<sup>Required</sup> <a name="server_order_preference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.serverOrderPreference"></a>

```python
server_order_preference: str
```

- *Type:* str

---

##### `trusted_certificate_authority_ids`<sup>Required</sup> <a name="trusted_certificate_authority_ids" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.trustedCertificateAuthorityIds"></a>

```python
trusted_certificate_authority_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verify_depth`<sup>Required</sup> <a name="verify_depth" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyDepth"></a>

```python
verify_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `verify_peer_certificate`<sup>Required</sup> <a name="verify_peer_certificate" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyPeerCertificate"></a>

```python
verify_peer_certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: LoadBalancerBackendsetSslConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a>

---


### LoadBalancerBackendsetTimeoutsOutputReference <a name="LoadBalancerBackendsetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import load_balancer_backendset

loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LoadBalancerBackendsetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a>]

---



