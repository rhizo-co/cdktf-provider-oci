# `waaWebAppAccelerationPolicy` Submodule <a name="`waaWebAppAccelerationPolicy` Submodule" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WaaWebAppAccelerationPolicy <a name="WaaWebAppAccelerationPolicy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy oci_waa_web_app_acceleration_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waa_web_app_acceleration_policy

waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy(
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
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  response_caching_policy: WaaWebAppAccelerationPolicyResponseCachingPolicy = None,
  response_compression_policy: WaaWebAppAccelerationPolicyResponseCompressionPolicy = None,
  system_tags: typing.Mapping[str] = None,
  timeouts: WaaWebAppAccelerationPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#compartment_id WaaWebAppAccelerationPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#defined_tags WaaWebAppAccelerationPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#display_name WaaWebAppAccelerationPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#freeform_tags WaaWebAppAccelerationPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#id WaaWebAppAccelerationPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.responseCachingPolicy">response_caching_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy">WaaWebAppAccelerationPolicyResponseCachingPolicy</a></code> | response_caching_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.responseCompressionPolicy">response_compression_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy">WaaWebAppAccelerationPolicyResponseCompressionPolicy</a></code> | response_compression_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.systemTags">system_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#system_tags WaaWebAppAccelerationPolicy#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts">WaaWebAppAccelerationPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#compartment_id WaaWebAppAccelerationPolicy#compartment_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#defined_tags WaaWebAppAccelerationPolicy#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#display_name WaaWebAppAccelerationPolicy#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#freeform_tags WaaWebAppAccelerationPolicy#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#id WaaWebAppAccelerationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `response_caching_policy`<sup>Optional</sup> <a name="response_caching_policy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.responseCachingPolicy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy">WaaWebAppAccelerationPolicyResponseCachingPolicy</a>

response_caching_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#response_caching_policy WaaWebAppAccelerationPolicy#response_caching_policy}

---

##### `response_compression_policy`<sup>Optional</sup> <a name="response_compression_policy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.responseCompressionPolicy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy">WaaWebAppAccelerationPolicyResponseCompressionPolicy</a>

response_compression_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#response_compression_policy WaaWebAppAccelerationPolicy#response_compression_policy}

---

##### `system_tags`<sup>Optional</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.systemTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#system_tags WaaWebAppAccelerationPolicy#system_tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts">WaaWebAppAccelerationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#timeouts WaaWebAppAccelerationPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.putResponseCachingPolicy">put_response_caching_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.putResponseCompressionPolicy">put_response_compression_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetResponseCachingPolicy">reset_response_caching_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetResponseCompressionPolicy">reset_response_compression_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetSystemTags">reset_system_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_response_caching_policy` <a name="put_response_caching_policy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.putResponseCachingPolicy"></a>

```python
def put_response_caching_policy(
  is_response_header_based_caching_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `is_response_header_based_caching_enabled`<sup>Optional</sup> <a name="is_response_header_based_caching_enabled" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.putResponseCachingPolicy.parameter.isResponseHeaderBasedCachingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#is_response_header_based_caching_enabled WaaWebAppAccelerationPolicy#is_response_header_based_caching_enabled}.

---

##### `put_response_compression_policy` <a name="put_response_compression_policy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.putResponseCompressionPolicy"></a>

```python
def put_response_compression_policy(
  gzip_compression: WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression = None
) -> None
```

###### `gzip_compression`<sup>Optional</sup> <a name="gzip_compression" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.putResponseCompressionPolicy.parameter.gzipCompression"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression">WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression</a>

gzip_compression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#gzip_compression WaaWebAppAccelerationPolicy#gzip_compression}

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#create WaaWebAppAccelerationPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#delete WaaWebAppAccelerationPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#update WaaWebAppAccelerationPolicy#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_response_caching_policy` <a name="reset_response_caching_policy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetResponseCachingPolicy"></a>

```python
def reset_response_caching_policy() -> None
```

##### `reset_response_compression_policy` <a name="reset_response_compression_policy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetResponseCompressionPolicy"></a>

```python
def reset_response_compression_policy() -> None
```

##### `reset_system_tags` <a name="reset_system_tags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetSystemTags"></a>

```python
def reset_system_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WaaWebAppAccelerationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import waa_web_app_acceleration_policy

waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import waa_web_app_acceleration_policy

waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import waa_web_app_acceleration_policy

waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import waa_web_app_acceleration_policy

waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WaaWebAppAccelerationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WaaWebAppAccelerationPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WaaWebAppAccelerationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WaaWebAppAccelerationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.responseCachingPolicy">response_caching_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference">WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.responseCompressionPolicy">response_compression_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference">WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference">WaaWebAppAccelerationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.responseCachingPolicyInput">response_caching_policy_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy">WaaWebAppAccelerationPolicyResponseCachingPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.responseCompressionPolicyInput">response_compression_policy_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy">WaaWebAppAccelerationPolicyResponseCompressionPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.systemTagsInput">system_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts">WaaWebAppAccelerationPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.systemTags">system_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `response_caching_policy`<sup>Required</sup> <a name="response_caching_policy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.responseCachingPolicy"></a>

```python
response_caching_policy: WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference">WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference</a>

---

##### `response_compression_policy`<sup>Required</sup> <a name="response_compression_policy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.responseCompressionPolicy"></a>

```python
response_compression_policy: WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference">WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.timeouts"></a>

```python
timeouts: WaaWebAppAccelerationPolicyTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference">WaaWebAppAccelerationPolicyTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `response_caching_policy_input`<sup>Optional</sup> <a name="response_caching_policy_input" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.responseCachingPolicyInput"></a>

```python
response_caching_policy_input: WaaWebAppAccelerationPolicyResponseCachingPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy">WaaWebAppAccelerationPolicyResponseCachingPolicy</a>

---

##### `response_compression_policy_input`<sup>Optional</sup> <a name="response_compression_policy_input" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.responseCompressionPolicyInput"></a>

```python
response_compression_policy_input: WaaWebAppAccelerationPolicyResponseCompressionPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy">WaaWebAppAccelerationPolicyResponseCompressionPolicy</a>

---

##### `system_tags_input`<sup>Optional</sup> <a name="system_tags_input" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.systemTagsInput"></a>

```python
system_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, WaaWebAppAccelerationPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts">WaaWebAppAccelerationPolicyTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.systemTags"></a>

```python
system_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WaaWebAppAccelerationPolicyConfig <a name="WaaWebAppAccelerationPolicyConfig" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waa_web_app_acceleration_policy

waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  response_caching_policy: WaaWebAppAccelerationPolicyResponseCachingPolicy = None,
  response_compression_policy: WaaWebAppAccelerationPolicyResponseCompressionPolicy = None,
  system_tags: typing.Mapping[str] = None,
  timeouts: WaaWebAppAccelerationPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#compartment_id WaaWebAppAccelerationPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#defined_tags WaaWebAppAccelerationPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#display_name WaaWebAppAccelerationPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#freeform_tags WaaWebAppAccelerationPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#id WaaWebAppAccelerationPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.responseCachingPolicy">response_caching_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy">WaaWebAppAccelerationPolicyResponseCachingPolicy</a></code> | response_caching_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.responseCompressionPolicy">response_compression_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy">WaaWebAppAccelerationPolicyResponseCompressionPolicy</a></code> | response_compression_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.systemTags">system_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#system_tags WaaWebAppAccelerationPolicy#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts">WaaWebAppAccelerationPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#compartment_id WaaWebAppAccelerationPolicy#compartment_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#defined_tags WaaWebAppAccelerationPolicy#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#display_name WaaWebAppAccelerationPolicy#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#freeform_tags WaaWebAppAccelerationPolicy#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#id WaaWebAppAccelerationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `response_caching_policy`<sup>Optional</sup> <a name="response_caching_policy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.responseCachingPolicy"></a>

```python
response_caching_policy: WaaWebAppAccelerationPolicyResponseCachingPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy">WaaWebAppAccelerationPolicyResponseCachingPolicy</a>

response_caching_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#response_caching_policy WaaWebAppAccelerationPolicy#response_caching_policy}

---

##### `response_compression_policy`<sup>Optional</sup> <a name="response_compression_policy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.responseCompressionPolicy"></a>

```python
response_compression_policy: WaaWebAppAccelerationPolicyResponseCompressionPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy">WaaWebAppAccelerationPolicyResponseCompressionPolicy</a>

response_compression_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#response_compression_policy WaaWebAppAccelerationPolicy#response_compression_policy}

---

##### `system_tags`<sup>Optional</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.systemTags"></a>

```python
system_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#system_tags WaaWebAppAccelerationPolicy#system_tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.timeouts"></a>

```python
timeouts: WaaWebAppAccelerationPolicyTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts">WaaWebAppAccelerationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#timeouts WaaWebAppAccelerationPolicy#timeouts}

---

### WaaWebAppAccelerationPolicyResponseCachingPolicy <a name="WaaWebAppAccelerationPolicyResponseCachingPolicy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waa_web_app_acceleration_policy

waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy(
  is_response_header_based_caching_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy.property.isResponseHeaderBasedCachingEnabled">is_response_header_based_caching_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#is_response_header_based_caching_enabled WaaWebAppAccelerationPolicy#is_response_header_based_caching_enabled}. |

---

##### `is_response_header_based_caching_enabled`<sup>Optional</sup> <a name="is_response_header_based_caching_enabled" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy.property.isResponseHeaderBasedCachingEnabled"></a>

```python
is_response_header_based_caching_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#is_response_header_based_caching_enabled WaaWebAppAccelerationPolicy#is_response_header_based_caching_enabled}.

---

### WaaWebAppAccelerationPolicyResponseCompressionPolicy <a name="WaaWebAppAccelerationPolicyResponseCompressionPolicy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waa_web_app_acceleration_policy

waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy(
  gzip_compression: WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy.property.gzipCompression">gzip_compression</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression">WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression</a></code> | gzip_compression block. |

---

##### `gzip_compression`<sup>Optional</sup> <a name="gzip_compression" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy.property.gzipCompression"></a>

```python
gzip_compression: WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression">WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression</a>

gzip_compression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#gzip_compression WaaWebAppAccelerationPolicy#gzip_compression}

---

### WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression <a name="WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waa_web_app_acceleration_policy

waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression(
  is_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#is_enabled WaaWebAppAccelerationPolicy#is_enabled}. |

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#is_enabled WaaWebAppAccelerationPolicy#is_enabled}.

---

### WaaWebAppAccelerationPolicyTimeouts <a name="WaaWebAppAccelerationPolicyTimeouts" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waa_web_app_acceleration_policy

waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#create WaaWebAppAccelerationPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#delete WaaWebAppAccelerationPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#update WaaWebAppAccelerationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#create WaaWebAppAccelerationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#delete WaaWebAppAccelerationPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#update WaaWebAppAccelerationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference <a name="WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waa_web_app_acceleration_policy

waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.resetIsResponseHeaderBasedCachingEnabled">reset_is_response_header_based_caching_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_response_header_based_caching_enabled` <a name="reset_is_response_header_based_caching_enabled" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.resetIsResponseHeaderBasedCachingEnabled"></a>

```python
def reset_is_response_header_based_caching_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.isResponseHeaderBasedCachingEnabledInput">is_response_header_based_caching_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.isResponseHeaderBasedCachingEnabled">is_response_header_based_caching_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy">WaaWebAppAccelerationPolicyResponseCachingPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_response_header_based_caching_enabled_input`<sup>Optional</sup> <a name="is_response_header_based_caching_enabled_input" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.isResponseHeaderBasedCachingEnabledInput"></a>

```python
is_response_header_based_caching_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_response_header_based_caching_enabled`<sup>Required</sup> <a name="is_response_header_based_caching_enabled" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.isResponseHeaderBasedCachingEnabled"></a>

```python
is_response_header_based_caching_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: WaaWebAppAccelerationPolicyResponseCachingPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy">WaaWebAppAccelerationPolicyResponseCachingPolicy</a>

---


### WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference <a name="WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waa_web_app_acceleration_policy

waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_enabled` <a name="reset_is_enabled" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression">WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.internalValue"></a>

```python
internal_value: WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression">WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression</a>

---


### WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference <a name="WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waa_web_app_acceleration_policy

waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.putGzipCompression">put_gzip_compression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.resetGzipCompression">reset_gzip_compression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gzip_compression` <a name="put_gzip_compression" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.putGzipCompression"></a>

```python
def put_gzip_compression(
  is_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.putGzipCompression.parameter.isEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#is_enabled WaaWebAppAccelerationPolicy#is_enabled}.

---

##### `reset_gzip_compression` <a name="reset_gzip_compression" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.resetGzipCompression"></a>

```python
def reset_gzip_compression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.gzipCompression">gzip_compression</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference">WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.gzipCompressionInput">gzip_compression_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression">WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy">WaaWebAppAccelerationPolicyResponseCompressionPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gzip_compression`<sup>Required</sup> <a name="gzip_compression" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.gzipCompression"></a>

```python
gzip_compression: WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference">WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference</a>

---

##### `gzip_compression_input`<sup>Optional</sup> <a name="gzip_compression_input" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.gzipCompressionInput"></a>

```python
gzip_compression_input: WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression">WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.internalValue"></a>

```python
internal_value: WaaWebAppAccelerationPolicyResponseCompressionPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy">WaaWebAppAccelerationPolicyResponseCompressionPolicy</a>

---


### WaaWebAppAccelerationPolicyTimeoutsOutputReference <a name="WaaWebAppAccelerationPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waa_web_app_acceleration_policy

waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts">WaaWebAppAccelerationPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WaaWebAppAccelerationPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts">WaaWebAppAccelerationPolicyTimeouts</a>]

---



