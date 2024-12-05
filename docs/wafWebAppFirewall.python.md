# `wafWebAppFirewall` Submodule <a name="`wafWebAppFirewall` Submodule" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafWebAppFirewall <a name="WafWebAppFirewall" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall oci_waf_web_app_firewall}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall

wafWebAppFirewall.WafWebAppFirewall(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend_type: str,
  compartment_id: str,
  load_balancer_id: str,
  web_app_firewall_policy_id: str,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  system_tags: typing.Mapping[str] = None,
  timeouts: WafWebAppFirewallTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.backendType">backend_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#backend_type WafWebAppFirewall#backend_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#compartment_id WafWebAppFirewall#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#load_balancer_id WafWebAppFirewall#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.webAppFirewallPolicyId">web_app_firewall_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#web_app_firewall_policy_id WafWebAppFirewall#web_app_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#defined_tags WafWebAppFirewall#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#display_name WafWebAppFirewall#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#freeform_tags WafWebAppFirewall#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#id WafWebAppFirewall#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.systemTags">system_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#system_tags WafWebAppFirewall#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeouts">WafWebAppFirewallTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_type`<sup>Required</sup> <a name="backend_type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.backendType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#backend_type WafWebAppFirewall#backend_type}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#compartment_id WafWebAppFirewall#compartment_id}.

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.loadBalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#load_balancer_id WafWebAppFirewall#load_balancer_id}.

---

##### `web_app_firewall_policy_id`<sup>Required</sup> <a name="web_app_firewall_policy_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.webAppFirewallPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#web_app_firewall_policy_id WafWebAppFirewall#web_app_firewall_policy_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#defined_tags WafWebAppFirewall#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#display_name WafWebAppFirewall#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#freeform_tags WafWebAppFirewall#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#id WafWebAppFirewall#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `system_tags`<sup>Optional</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.systemTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#system_tags WafWebAppFirewall#system_tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeouts">WafWebAppFirewallTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#timeouts WafWebAppFirewall#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.resetSystemTags">reset_system_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#create WafWebAppFirewall#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#delete WafWebAppFirewall#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#update WafWebAppFirewall#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_system_tags` <a name="reset_system_tags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.resetSystemTags"></a>

```python
def reset_system_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WafWebAppFirewall resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall

wafWebAppFirewall.WafWebAppFirewall.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall

wafWebAppFirewall.WafWebAppFirewall.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall

wafWebAppFirewall.WafWebAppFirewall.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall

wafWebAppFirewall.WafWebAppFirewall.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WafWebAppFirewall resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WafWebAppFirewall to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WafWebAppFirewall that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WafWebAppFirewall to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference">WafWebAppFirewallTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.backendTypeInput">backend_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.loadBalancerIdInput">load_balancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.systemTagsInput">system_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeouts">WafWebAppFirewallTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.webAppFirewallPolicyIdInput">web_app_firewall_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.backendType">backend_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.systemTags">system_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.webAppFirewallPolicyId">web_app_firewall_policy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.timeouts"></a>

```python
timeouts: WafWebAppFirewallTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference">WafWebAppFirewallTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `backend_type_input`<sup>Optional</sup> <a name="backend_type_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.backendTypeInput"></a>

```python
backend_type_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `load_balancer_id_input`<sup>Optional</sup> <a name="load_balancer_id_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.loadBalancerIdInput"></a>

```python
load_balancer_id_input: str
```

- *Type:* str

---

##### `system_tags_input`<sup>Optional</sup> <a name="system_tags_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.systemTagsInput"></a>

```python
system_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, WafWebAppFirewallTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeouts">WafWebAppFirewallTimeouts</a>]

---

##### `web_app_firewall_policy_id_input`<sup>Optional</sup> <a name="web_app_firewall_policy_id_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.webAppFirewallPolicyIdInput"></a>

```python
web_app_firewall_policy_id_input: str
```

- *Type:* str

---

##### `backend_type`<sup>Required</sup> <a name="backend_type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.backendType"></a>

```python
backend_type: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.systemTags"></a>

```python
system_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `web_app_firewall_policy_id`<sup>Required</sup> <a name="web_app_firewall_policy_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.webAppFirewallPolicyId"></a>

```python
web_app_firewall_policy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewall.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WafWebAppFirewallConfig <a name="WafWebAppFirewallConfig" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall

wafWebAppFirewall.WafWebAppFirewallConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend_type: str,
  compartment_id: str,
  load_balancer_id: str,
  web_app_firewall_policy_id: str,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  system_tags: typing.Mapping[str] = None,
  timeouts: WafWebAppFirewallTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.backendType">backend_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#backend_type WafWebAppFirewall#backend_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#compartment_id WafWebAppFirewall#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#load_balancer_id WafWebAppFirewall#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.webAppFirewallPolicyId">web_app_firewall_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#web_app_firewall_policy_id WafWebAppFirewall#web_app_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#defined_tags WafWebAppFirewall#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#display_name WafWebAppFirewall#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#freeform_tags WafWebAppFirewall#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#id WafWebAppFirewall#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.systemTags">system_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#system_tags WafWebAppFirewall#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeouts">WafWebAppFirewallTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_type`<sup>Required</sup> <a name="backend_type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.backendType"></a>

```python
backend_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#backend_type WafWebAppFirewall#backend_type}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#compartment_id WafWebAppFirewall#compartment_id}.

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#load_balancer_id WafWebAppFirewall#load_balancer_id}.

---

##### `web_app_firewall_policy_id`<sup>Required</sup> <a name="web_app_firewall_policy_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.webAppFirewallPolicyId"></a>

```python
web_app_firewall_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#web_app_firewall_policy_id WafWebAppFirewall#web_app_firewall_policy_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#defined_tags WafWebAppFirewall#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#display_name WafWebAppFirewall#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#freeform_tags WafWebAppFirewall#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#id WafWebAppFirewall#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `system_tags`<sup>Optional</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.systemTags"></a>

```python
system_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#system_tags WafWebAppFirewall#system_tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallConfig.property.timeouts"></a>

```python
timeouts: WafWebAppFirewallTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeouts">WafWebAppFirewallTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#timeouts WafWebAppFirewall#timeouts}

---

### WafWebAppFirewallTimeouts <a name="WafWebAppFirewallTimeouts" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall

wafWebAppFirewall.WafWebAppFirewallTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#create WafWebAppFirewall#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#delete WafWebAppFirewall#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#update WafWebAppFirewall#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#create WafWebAppFirewall#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#delete WafWebAppFirewall#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall#update WafWebAppFirewall#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafWebAppFirewallTimeoutsOutputReference <a name="WafWebAppFirewallTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall

wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeouts">WafWebAppFirewallTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WafWebAppFirewallTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewall.WafWebAppFirewallTimeouts">WafWebAppFirewallTimeouts</a>]

---



