# `healthChecksHttpMonitor` Submodule <a name="`healthChecksHttpMonitor` Submodule" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthChecksHttpMonitor <a name="HealthChecksHttpMonitor" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor oci_health_checks_http_monitor}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import health_checks_http_monitor

healthChecksHttpMonitor.HealthChecksHttpMonitor(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str,
  interval_in_seconds: typing.Union[int, float],
  protocol: str,
  targets: typing.List[str],
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  headers: typing.Mapping[str] = None,
  id: str = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  method: str = None,
  path: str = None,
  port: typing.Union[int, float] = None,
  timeout_in_seconds: typing.Union[int, float] = None,
  timeouts: HealthChecksHttpMonitorTimeouts = None,
  vantage_point_names: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#compartment_id HealthChecksHttpMonitor#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#display_name HealthChecksHttpMonitor#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.intervalInSeconds">interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#interval_in_seconds HealthChecksHttpMonitor#interval_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#protocol HealthChecksHttpMonitor#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.targets">targets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#targets HealthChecksHttpMonitor#targets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#defined_tags HealthChecksHttpMonitor#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#freeform_tags HealthChecksHttpMonitor#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.headers">headers</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#headers HealthChecksHttpMonitor#headers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#id HealthChecksHttpMonitor#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#is_enabled HealthChecksHttpMonitor#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.method">method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#method HealthChecksHttpMonitor#method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#path HealthChecksHttpMonitor#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#port HealthChecksHttpMonitor#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#timeout_in_seconds HealthChecksHttpMonitor#timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeouts">HealthChecksHttpMonitorTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.vantagePointNames">vantage_point_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#vantage_point_names HealthChecksHttpMonitor#vantage_point_names}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#compartment_id HealthChecksHttpMonitor#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#display_name HealthChecksHttpMonitor#display_name}.

---

##### `interval_in_seconds`<sup>Required</sup> <a name="interval_in_seconds" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.intervalInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#interval_in_seconds HealthChecksHttpMonitor#interval_in_seconds}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#protocol HealthChecksHttpMonitor#protocol}.

---

##### `targets`<sup>Required</sup> <a name="targets" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.targets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#targets HealthChecksHttpMonitor#targets}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#defined_tags HealthChecksHttpMonitor#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#freeform_tags HealthChecksHttpMonitor#freeform_tags}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.headers"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#headers HealthChecksHttpMonitor#headers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#id HealthChecksHttpMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.isEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#is_enabled HealthChecksHttpMonitor#is_enabled}.

---

##### `method`<sup>Optional</sup> <a name="method" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.method"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#method HealthChecksHttpMonitor#method}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#path HealthChecksHttpMonitor#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#port HealthChecksHttpMonitor#port}.

---

##### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.timeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#timeout_in_seconds HealthChecksHttpMonitor#timeout_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeouts">HealthChecksHttpMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#timeouts HealthChecksHttpMonitor#timeouts}

---

##### `vantage_point_names`<sup>Optional</sup> <a name="vantage_point_names" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.vantagePointNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#vantage_point_names HealthChecksHttpMonitor#vantage_point_names}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetMethod">reset_method</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetTimeoutInSeconds">reset_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetVantagePointNames">reset_vantage_point_names</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#create HealthChecksHttpMonitor#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#delete HealthChecksHttpMonitor#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#update HealthChecksHttpMonitor#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_headers` <a name="reset_headers" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_enabled` <a name="reset_is_enabled" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```

##### `reset_method` <a name="reset_method" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetMethod"></a>

```python
def reset_method() -> None
```

##### `reset_path` <a name="reset_path" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_port` <a name="reset_port" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_timeout_in_seconds` <a name="reset_timeout_in_seconds" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetTimeoutInSeconds"></a>

```python
def reset_timeout_in_seconds() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vantage_point_names` <a name="reset_vantage_point_names" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetVantagePointNames"></a>

```python
def reset_vantage_point_names() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a HealthChecksHttpMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import health_checks_http_monitor

healthChecksHttpMonitor.HealthChecksHttpMonitor.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import health_checks_http_monitor

healthChecksHttpMonitor.HealthChecksHttpMonitor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import health_checks_http_monitor

healthChecksHttpMonitor.HealthChecksHttpMonitor.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import health_checks_http_monitor

healthChecksHttpMonitor.HealthChecksHttpMonitor.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a HealthChecksHttpMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the HealthChecksHttpMonitor to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing HealthChecksHttpMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HealthChecksHttpMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.homeRegion">home_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.resultsUrl">results_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference">HealthChecksHttpMonitorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.headersInput">headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.intervalInSecondsInput">interval_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.targetsInput">targets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.timeoutInSecondsInput">timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeouts">HealthChecksHttpMonitorTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.vantagePointNamesInput">vantage_point_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.headers">headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.intervalInSeconds">interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.targets">targets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.vantagePointNames">vantage_point_names</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `home_region`<sup>Required</sup> <a name="home_region" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.homeRegion"></a>

```python
home_region: str
```

- *Type:* str

---

##### `results_url`<sup>Required</sup> <a name="results_url" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.resultsUrl"></a>

```python
results_url: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.timeouts"></a>

```python
timeouts: HealthChecksHttpMonitorTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference">HealthChecksHttpMonitorTimeoutsOutputReference</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.headersInput"></a>

```python
headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `interval_in_seconds_input`<sup>Optional</sup> <a name="interval_in_seconds_input" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.intervalInSecondsInput"></a>

```python
interval_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.targetsInput"></a>

```python
targets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeout_in_seconds_input`<sup>Optional</sup> <a name="timeout_in_seconds_input" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.timeoutInSecondsInput"></a>

```python
timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, HealthChecksHttpMonitorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeouts">HealthChecksHttpMonitorTimeouts</a>]

---

##### `vantage_point_names_input`<sup>Optional</sup> <a name="vantage_point_names_input" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.vantagePointNamesInput"></a>

```python
vantage_point_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `headers`<sup>Required</sup> <a name="headers" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.headers"></a>

```python
headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interval_in_seconds`<sup>Required</sup> <a name="interval_in_seconds" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.intervalInSeconds"></a>

```python
interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `method`<sup>Required</sup> <a name="method" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `targets`<sup>Required</sup> <a name="targets" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.targets"></a>

```python
targets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vantage_point_names`<sup>Required</sup> <a name="vantage_point_names" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.vantagePointNames"></a>

```python
vantage_point_names: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HealthChecksHttpMonitorConfig <a name="HealthChecksHttpMonitorConfig" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import health_checks_http_monitor

healthChecksHttpMonitor.HealthChecksHttpMonitorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str,
  interval_in_seconds: typing.Union[int, float],
  protocol: str,
  targets: typing.List[str],
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  headers: typing.Mapping[str] = None,
  id: str = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  method: str = None,
  path: str = None,
  port: typing.Union[int, float] = None,
  timeout_in_seconds: typing.Union[int, float] = None,
  timeouts: HealthChecksHttpMonitorTimeouts = None,
  vantage_point_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#compartment_id HealthChecksHttpMonitor#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#display_name HealthChecksHttpMonitor#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.intervalInSeconds">interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#interval_in_seconds HealthChecksHttpMonitor#interval_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#protocol HealthChecksHttpMonitor#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.targets">targets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#targets HealthChecksHttpMonitor#targets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#defined_tags HealthChecksHttpMonitor#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#freeform_tags HealthChecksHttpMonitor#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.headers">headers</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#headers HealthChecksHttpMonitor#headers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#id HealthChecksHttpMonitor#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#is_enabled HealthChecksHttpMonitor#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.method">method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#method HealthChecksHttpMonitor#method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#path HealthChecksHttpMonitor#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#port HealthChecksHttpMonitor#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#timeout_in_seconds HealthChecksHttpMonitor#timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeouts">HealthChecksHttpMonitorTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.vantagePointNames">vantage_point_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#vantage_point_names HealthChecksHttpMonitor#vantage_point_names}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#compartment_id HealthChecksHttpMonitor#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#display_name HealthChecksHttpMonitor#display_name}.

---

##### `interval_in_seconds`<sup>Required</sup> <a name="interval_in_seconds" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.intervalInSeconds"></a>

```python
interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#interval_in_seconds HealthChecksHttpMonitor#interval_in_seconds}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#protocol HealthChecksHttpMonitor#protocol}.

---

##### `targets`<sup>Required</sup> <a name="targets" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.targets"></a>

```python
targets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#targets HealthChecksHttpMonitor#targets}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#defined_tags HealthChecksHttpMonitor#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#freeform_tags HealthChecksHttpMonitor#freeform_tags}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.headers"></a>

```python
headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#headers HealthChecksHttpMonitor#headers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#id HealthChecksHttpMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#is_enabled HealthChecksHttpMonitor#is_enabled}.

---

##### `method`<sup>Optional</sup> <a name="method" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.method"></a>

```python
method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#method HealthChecksHttpMonitor#method}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#path HealthChecksHttpMonitor#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#port HealthChecksHttpMonitor#port}.

---

##### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#timeout_in_seconds HealthChecksHttpMonitor#timeout_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.timeouts"></a>

```python
timeouts: HealthChecksHttpMonitorTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeouts">HealthChecksHttpMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#timeouts HealthChecksHttpMonitor#timeouts}

---

##### `vantage_point_names`<sup>Optional</sup> <a name="vantage_point_names" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.vantagePointNames"></a>

```python
vantage_point_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#vantage_point_names HealthChecksHttpMonitor#vantage_point_names}.

---

### HealthChecksHttpMonitorTimeouts <a name="HealthChecksHttpMonitorTimeouts" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import health_checks_http_monitor

healthChecksHttpMonitor.HealthChecksHttpMonitorTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#create HealthChecksHttpMonitor#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#delete HealthChecksHttpMonitor#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#update HealthChecksHttpMonitor#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#create HealthChecksHttpMonitor#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#delete HealthChecksHttpMonitor#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#update HealthChecksHttpMonitor#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthChecksHttpMonitorTimeoutsOutputReference <a name="HealthChecksHttpMonitorTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import health_checks_http_monitor

healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeouts">HealthChecksHttpMonitorTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HealthChecksHttpMonitorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeouts">HealthChecksHttpMonitorTimeouts</a>]

---



