# `wafWebAppFirewallPolicy` Submodule <a name="`wafWebAppFirewallPolicy` Submodule" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafWebAppFirewallPolicy <a name="WafWebAppFirewallPolicy" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy oci_waf_web_app_firewall_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicy(
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
  actions: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyActions]] = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  request_access_control: WafWebAppFirewallPolicyRequestAccessControl = None,
  request_protection: WafWebAppFirewallPolicyRequestProtection = None,
  request_rate_limiting: WafWebAppFirewallPolicyRequestRateLimiting = None,
  response_access_control: WafWebAppFirewallPolicyResponseAccessControl = None,
  response_protection: WafWebAppFirewallPolicyResponseProtection = None,
  system_tags: typing.Mapping[str] = None,
  timeouts: WafWebAppFirewallPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#compartment_id WafWebAppFirewallPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.actions">actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions">WafWebAppFirewallPolicyActions</a>]]</code> | actions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#defined_tags WafWebAppFirewallPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#display_name WafWebAppFirewallPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#freeform_tags WafWebAppFirewallPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#id WafWebAppFirewallPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.requestAccessControl">request_access_control</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl">WafWebAppFirewallPolicyRequestAccessControl</a></code> | request_access_control block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.requestProtection">request_protection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection">WafWebAppFirewallPolicyRequestProtection</a></code> | request_protection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.requestRateLimiting">request_rate_limiting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting">WafWebAppFirewallPolicyRequestRateLimiting</a></code> | request_rate_limiting block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.responseAccessControl">response_access_control</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl">WafWebAppFirewallPolicyResponseAccessControl</a></code> | response_access_control block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.responseProtection">response_protection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection">WafWebAppFirewallPolicyResponseProtection</a></code> | response_protection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.systemTags">system_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#system_tags WafWebAppFirewallPolicy#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts">WafWebAppFirewallPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#compartment_id WafWebAppFirewallPolicy#compartment_id}.

---

##### `actions`<sup>Optional</sup> <a name="actions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.actions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions">WafWebAppFirewallPolicyActions</a>]]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#actions WafWebAppFirewallPolicy#actions}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#defined_tags WafWebAppFirewallPolicy#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#display_name WafWebAppFirewallPolicy#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#freeform_tags WafWebAppFirewallPolicy#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#id WafWebAppFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `request_access_control`<sup>Optional</sup> <a name="request_access_control" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.requestAccessControl"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl">WafWebAppFirewallPolicyRequestAccessControl</a>

request_access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#request_access_control WafWebAppFirewallPolicy#request_access_control}

---

##### `request_protection`<sup>Optional</sup> <a name="request_protection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.requestProtection"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection">WafWebAppFirewallPolicyRequestProtection</a>

request_protection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#request_protection WafWebAppFirewallPolicy#request_protection}

---

##### `request_rate_limiting`<sup>Optional</sup> <a name="request_rate_limiting" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.requestRateLimiting"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting">WafWebAppFirewallPolicyRequestRateLimiting</a>

request_rate_limiting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#request_rate_limiting WafWebAppFirewallPolicy#request_rate_limiting}

---

##### `response_access_control`<sup>Optional</sup> <a name="response_access_control" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.responseAccessControl"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl">WafWebAppFirewallPolicyResponseAccessControl</a>

response_access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#response_access_control WafWebAppFirewallPolicy#response_access_control}

---

##### `response_protection`<sup>Optional</sup> <a name="response_protection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.responseProtection"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection">WafWebAppFirewallPolicyResponseProtection</a>

response_protection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#response_protection WafWebAppFirewallPolicy#response_protection}

---

##### `system_tags`<sup>Optional</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.systemTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#system_tags WafWebAppFirewallPolicy#system_tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts">WafWebAppFirewallPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#timeouts WafWebAppFirewallPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putActions">put_actions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestAccessControl">put_request_access_control</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestProtection">put_request_protection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestRateLimiting">put_request_rate_limiting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putResponseAccessControl">put_response_access_control</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putResponseProtection">put_response_protection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetActions">reset_actions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetRequestAccessControl">reset_request_access_control</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetRequestProtection">reset_request_protection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetRequestRateLimiting">reset_request_rate_limiting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetResponseAccessControl">reset_response_access_control</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetResponseProtection">reset_response_protection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetSystemTags">reset_system_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_actions` <a name="put_actions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putActions"></a>

```python
def put_actions(
  value: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyActions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putActions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions">WafWebAppFirewallPolicyActions</a>]]

---

##### `put_request_access_control` <a name="put_request_access_control" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestAccessControl"></a>

```python
def put_request_access_control(
  default_action_name: str,
  rules: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestAccessControlRules]] = None
) -> None
```

###### `default_action_name`<sup>Required</sup> <a name="default_action_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestAccessControl.parameter.defaultActionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#default_action_name WafWebAppFirewallPolicy#default_action_name}.

---

###### `rules`<sup>Optional</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestAccessControl.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules">WafWebAppFirewallPolicyRequestAccessControlRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#rules WafWebAppFirewallPolicy#rules}

---

##### `put_request_protection` <a name="put_request_protection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestProtection"></a>

```python
def put_request_protection(
  body_inspection_size_limit_exceeded_action_name: str = None,
  body_inspection_size_limit_in_bytes: typing.Union[int, float] = None,
  rules: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestProtectionRules]] = None
) -> None
```

###### `body_inspection_size_limit_exceeded_action_name`<sup>Optional</sup> <a name="body_inspection_size_limit_exceeded_action_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestProtection.parameter.bodyInspectionSizeLimitExceededActionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#body_inspection_size_limit_exceeded_action_name WafWebAppFirewallPolicy#body_inspection_size_limit_exceeded_action_name}.

---

###### `body_inspection_size_limit_in_bytes`<sup>Optional</sup> <a name="body_inspection_size_limit_in_bytes" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestProtection.parameter.bodyInspectionSizeLimitInBytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#body_inspection_size_limit_in_bytes WafWebAppFirewallPolicy#body_inspection_size_limit_in_bytes}.

---

###### `rules`<sup>Optional</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestProtection.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules">WafWebAppFirewallPolicyRequestProtectionRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#rules WafWebAppFirewallPolicy#rules}

---

##### `put_request_rate_limiting` <a name="put_request_rate_limiting" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestRateLimiting"></a>

```python
def put_request_rate_limiting(
  rules: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestRateLimitingRules]] = None
) -> None
```

###### `rules`<sup>Optional</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestRateLimiting.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules">WafWebAppFirewallPolicyRequestRateLimitingRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#rules WafWebAppFirewallPolicy#rules}

---

##### `put_response_access_control` <a name="put_response_access_control" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putResponseAccessControl"></a>

```python
def put_response_access_control(
  rules: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyResponseAccessControlRules]] = None
) -> None
```

###### `rules`<sup>Optional</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putResponseAccessControl.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules">WafWebAppFirewallPolicyResponseAccessControlRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#rules WafWebAppFirewallPolicy#rules}

---

##### `put_response_protection` <a name="put_response_protection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putResponseProtection"></a>

```python
def put_response_protection(
  rules: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyResponseProtectionRules]] = None
) -> None
```

###### `rules`<sup>Optional</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putResponseProtection.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules">WafWebAppFirewallPolicyResponseProtectionRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#rules WafWebAppFirewallPolicy#rules}

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#create WafWebAppFirewallPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#delete WafWebAppFirewallPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#update WafWebAppFirewallPolicy#update}.

---

##### `reset_actions` <a name="reset_actions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetActions"></a>

```python
def reset_actions() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_request_access_control` <a name="reset_request_access_control" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetRequestAccessControl"></a>

```python
def reset_request_access_control() -> None
```

##### `reset_request_protection` <a name="reset_request_protection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetRequestProtection"></a>

```python
def reset_request_protection() -> None
```

##### `reset_request_rate_limiting` <a name="reset_request_rate_limiting" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetRequestRateLimiting"></a>

```python
def reset_request_rate_limiting() -> None
```

##### `reset_response_access_control` <a name="reset_response_access_control" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetResponseAccessControl"></a>

```python
def reset_response_access_control() -> None
```

##### `reset_response_protection` <a name="reset_response_protection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetResponseProtection"></a>

```python
def reset_response_protection() -> None
```

##### `reset_system_tags` <a name="reset_system_tags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetSystemTags"></a>

```python
def reset_system_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WafWebAppFirewallPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WafWebAppFirewallPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WafWebAppFirewallPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WafWebAppFirewallPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WafWebAppFirewallPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.actions">actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList">WafWebAppFirewallPolicyActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestAccessControl">request_access_control</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference">WafWebAppFirewallPolicyRequestAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestProtection">request_protection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference">WafWebAppFirewallPolicyRequestProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestRateLimiting">request_rate_limiting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference">WafWebAppFirewallPolicyRequestRateLimitingOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.responseAccessControl">response_access_control</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference">WafWebAppFirewallPolicyResponseAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.responseProtection">response_protection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference">WafWebAppFirewallPolicyResponseProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference">WafWebAppFirewallPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.actionsInput">actions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions">WafWebAppFirewallPolicyActions</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestAccessControlInput">request_access_control_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl">WafWebAppFirewallPolicyRequestAccessControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestProtectionInput">request_protection_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection">WafWebAppFirewallPolicyRequestProtection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestRateLimitingInput">request_rate_limiting_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting">WafWebAppFirewallPolicyRequestRateLimiting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.responseAccessControlInput">response_access_control_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl">WafWebAppFirewallPolicyResponseAccessControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.responseProtectionInput">response_protection_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection">WafWebAppFirewallPolicyResponseProtection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.systemTagsInput">system_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts">WafWebAppFirewallPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.systemTags">system_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `actions`<sup>Required</sup> <a name="actions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.actions"></a>

```python
actions: WafWebAppFirewallPolicyActionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList">WafWebAppFirewallPolicyActionsList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `request_access_control`<sup>Required</sup> <a name="request_access_control" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestAccessControl"></a>

```python
request_access_control: WafWebAppFirewallPolicyRequestAccessControlOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference">WafWebAppFirewallPolicyRequestAccessControlOutputReference</a>

---

##### `request_protection`<sup>Required</sup> <a name="request_protection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestProtection"></a>

```python
request_protection: WafWebAppFirewallPolicyRequestProtectionOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference">WafWebAppFirewallPolicyRequestProtectionOutputReference</a>

---

##### `request_rate_limiting`<sup>Required</sup> <a name="request_rate_limiting" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestRateLimiting"></a>

```python
request_rate_limiting: WafWebAppFirewallPolicyRequestRateLimitingOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference">WafWebAppFirewallPolicyRequestRateLimitingOutputReference</a>

---

##### `response_access_control`<sup>Required</sup> <a name="response_access_control" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.responseAccessControl"></a>

```python
response_access_control: WafWebAppFirewallPolicyResponseAccessControlOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference">WafWebAppFirewallPolicyResponseAccessControlOutputReference</a>

---

##### `response_protection`<sup>Required</sup> <a name="response_protection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.responseProtection"></a>

```python
response_protection: WafWebAppFirewallPolicyResponseProtectionOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference">WafWebAppFirewallPolicyResponseProtectionOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.timeouts"></a>

```python
timeouts: WafWebAppFirewallPolicyTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference">WafWebAppFirewallPolicyTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.actionsInput"></a>

```python
actions_input: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions">WafWebAppFirewallPolicyActions</a>]]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `request_access_control_input`<sup>Optional</sup> <a name="request_access_control_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestAccessControlInput"></a>

```python
request_access_control_input: WafWebAppFirewallPolicyRequestAccessControl
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl">WafWebAppFirewallPolicyRequestAccessControl</a>

---

##### `request_protection_input`<sup>Optional</sup> <a name="request_protection_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestProtectionInput"></a>

```python
request_protection_input: WafWebAppFirewallPolicyRequestProtection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection">WafWebAppFirewallPolicyRequestProtection</a>

---

##### `request_rate_limiting_input`<sup>Optional</sup> <a name="request_rate_limiting_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestRateLimitingInput"></a>

```python
request_rate_limiting_input: WafWebAppFirewallPolicyRequestRateLimiting
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting">WafWebAppFirewallPolicyRequestRateLimiting</a>

---

##### `response_access_control_input`<sup>Optional</sup> <a name="response_access_control_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.responseAccessControlInput"></a>

```python
response_access_control_input: WafWebAppFirewallPolicyResponseAccessControl
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl">WafWebAppFirewallPolicyResponseAccessControl</a>

---

##### `response_protection_input`<sup>Optional</sup> <a name="response_protection_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.responseProtectionInput"></a>

```python
response_protection_input: WafWebAppFirewallPolicyResponseProtection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection">WafWebAppFirewallPolicyResponseProtection</a>

---

##### `system_tags_input`<sup>Optional</sup> <a name="system_tags_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.systemTagsInput"></a>

```python
system_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, WafWebAppFirewallPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts">WafWebAppFirewallPolicyTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.systemTags"></a>

```python
system_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WafWebAppFirewallPolicyActions <a name="WafWebAppFirewallPolicyActions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions(
  name: str,
  type: str,
  body: WafWebAppFirewallPolicyActionsBody = None,
  code: typing.Union[int, float] = None,
  headers: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyActionsHeaders]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.body">body</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody">WafWebAppFirewallPolicyActionsBody</a></code> | body block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.code">code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#code WafWebAppFirewallPolicy#code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeaders">WafWebAppFirewallPolicyActionsHeaders</a>]]</code> | headers block. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}.

---

##### `body`<sup>Optional</sup> <a name="body" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.body"></a>

```python
body: WafWebAppFirewallPolicyActionsBody
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody">WafWebAppFirewallPolicyActionsBody</a>

body block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#body WafWebAppFirewallPolicy#body}

---

##### `code`<sup>Optional</sup> <a name="code" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#code WafWebAppFirewallPolicy#code}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.headers"></a>

```python
headers: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyActionsHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeaders">WafWebAppFirewallPolicyActionsHeaders</a>]]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#headers WafWebAppFirewallPolicy#headers}

---

### WafWebAppFirewallPolicyActionsBody <a name="WafWebAppFirewallPolicyActionsBody" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody(
  type: str,
  template: str = None,
  text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody.property.template">template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#template WafWebAppFirewallPolicy#template}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody.property.text">text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#text WafWebAppFirewallPolicy#text}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}.

---

##### `template`<sup>Optional</sup> <a name="template" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody.property.template"></a>

```python
template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#template WafWebAppFirewallPolicy#template}.

---

##### `text`<sup>Optional</sup> <a name="text" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody.property.text"></a>

```python
text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#text WafWebAppFirewallPolicy#text}.

---

### WafWebAppFirewallPolicyActionsHeaders <a name="WafWebAppFirewallPolicyActionsHeaders" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeaders.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeaders(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeaders.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeaders.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#value WafWebAppFirewallPolicy#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeaders.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeaders.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#value WafWebAppFirewallPolicy#value}.

---

### WafWebAppFirewallPolicyConfig <a name="WafWebAppFirewallPolicyConfig" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  actions: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyActions]] = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  request_access_control: WafWebAppFirewallPolicyRequestAccessControl = None,
  request_protection: WafWebAppFirewallPolicyRequestProtection = None,
  request_rate_limiting: WafWebAppFirewallPolicyRequestRateLimiting = None,
  response_access_control: WafWebAppFirewallPolicyResponseAccessControl = None,
  response_protection: WafWebAppFirewallPolicyResponseProtection = None,
  system_tags: typing.Mapping[str] = None,
  timeouts: WafWebAppFirewallPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#compartment_id WafWebAppFirewallPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.actions">actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions">WafWebAppFirewallPolicyActions</a>]]</code> | actions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#defined_tags WafWebAppFirewallPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#display_name WafWebAppFirewallPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#freeform_tags WafWebAppFirewallPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#id WafWebAppFirewallPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.requestAccessControl">request_access_control</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl">WafWebAppFirewallPolicyRequestAccessControl</a></code> | request_access_control block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.requestProtection">request_protection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection">WafWebAppFirewallPolicyRequestProtection</a></code> | request_protection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.requestRateLimiting">request_rate_limiting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting">WafWebAppFirewallPolicyRequestRateLimiting</a></code> | request_rate_limiting block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.responseAccessControl">response_access_control</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl">WafWebAppFirewallPolicyResponseAccessControl</a></code> | response_access_control block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.responseProtection">response_protection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection">WafWebAppFirewallPolicyResponseProtection</a></code> | response_protection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.systemTags">system_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#system_tags WafWebAppFirewallPolicy#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts">WafWebAppFirewallPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#compartment_id WafWebAppFirewallPolicy#compartment_id}.

---

##### `actions`<sup>Optional</sup> <a name="actions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.actions"></a>

```python
actions: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions">WafWebAppFirewallPolicyActions</a>]]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#actions WafWebAppFirewallPolicy#actions}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#defined_tags WafWebAppFirewallPolicy#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#display_name WafWebAppFirewallPolicy#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#freeform_tags WafWebAppFirewallPolicy#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#id WafWebAppFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `request_access_control`<sup>Optional</sup> <a name="request_access_control" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.requestAccessControl"></a>

```python
request_access_control: WafWebAppFirewallPolicyRequestAccessControl
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl">WafWebAppFirewallPolicyRequestAccessControl</a>

request_access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#request_access_control WafWebAppFirewallPolicy#request_access_control}

---

##### `request_protection`<sup>Optional</sup> <a name="request_protection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.requestProtection"></a>

```python
request_protection: WafWebAppFirewallPolicyRequestProtection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection">WafWebAppFirewallPolicyRequestProtection</a>

request_protection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#request_protection WafWebAppFirewallPolicy#request_protection}

---

##### `request_rate_limiting`<sup>Optional</sup> <a name="request_rate_limiting" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.requestRateLimiting"></a>

```python
request_rate_limiting: WafWebAppFirewallPolicyRequestRateLimiting
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting">WafWebAppFirewallPolicyRequestRateLimiting</a>

request_rate_limiting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#request_rate_limiting WafWebAppFirewallPolicy#request_rate_limiting}

---

##### `response_access_control`<sup>Optional</sup> <a name="response_access_control" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.responseAccessControl"></a>

```python
response_access_control: WafWebAppFirewallPolicyResponseAccessControl
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl">WafWebAppFirewallPolicyResponseAccessControl</a>

response_access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#response_access_control WafWebAppFirewallPolicy#response_access_control}

---

##### `response_protection`<sup>Optional</sup> <a name="response_protection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.responseProtection"></a>

```python
response_protection: WafWebAppFirewallPolicyResponseProtection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection">WafWebAppFirewallPolicyResponseProtection</a>

response_protection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#response_protection WafWebAppFirewallPolicy#response_protection}

---

##### `system_tags`<sup>Optional</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.systemTags"></a>

```python
system_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#system_tags WafWebAppFirewallPolicy#system_tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.timeouts"></a>

```python
timeouts: WafWebAppFirewallPolicyTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts">WafWebAppFirewallPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#timeouts WafWebAppFirewallPolicy#timeouts}

---

### WafWebAppFirewallPolicyRequestAccessControl <a name="WafWebAppFirewallPolicyRequestAccessControl" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl(
  default_action_name: str,
  rules: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestAccessControlRules]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl.property.defaultActionName">default_action_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#default_action_name WafWebAppFirewallPolicy#default_action_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules">WafWebAppFirewallPolicyRequestAccessControlRules</a>]]</code> | rules block. |

---

##### `default_action_name`<sup>Required</sup> <a name="default_action_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl.property.defaultActionName"></a>

```python
default_action_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#default_action_name WafWebAppFirewallPolicy#default_action_name}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestAccessControlRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules">WafWebAppFirewallPolicyRequestAccessControlRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#rules WafWebAppFirewallPolicy#rules}

---

### WafWebAppFirewallPolicyRequestAccessControlRules <a name="WafWebAppFirewallPolicyRequestAccessControlRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules(
  action_name: str,
  name: str,
  type: str,
  condition: str = None,
  condition_language: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.actionName">action_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.condition">condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.conditionLanguage">condition_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}. |

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.condition"></a>

```python
condition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}.

---

##### `condition_language`<sup>Optional</sup> <a name="condition_language" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.conditionLanguage"></a>

```python
condition_language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}.

---

### WafWebAppFirewallPolicyRequestProtection <a name="WafWebAppFirewallPolicyRequestProtection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection(
  body_inspection_size_limit_exceeded_action_name: str = None,
  body_inspection_size_limit_in_bytes: typing.Union[int, float] = None,
  rules: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestProtectionRules]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection.property.bodyInspectionSizeLimitExceededActionName">body_inspection_size_limit_exceeded_action_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#body_inspection_size_limit_exceeded_action_name WafWebAppFirewallPolicy#body_inspection_size_limit_exceeded_action_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection.property.bodyInspectionSizeLimitInBytes">body_inspection_size_limit_in_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#body_inspection_size_limit_in_bytes WafWebAppFirewallPolicy#body_inspection_size_limit_in_bytes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules">WafWebAppFirewallPolicyRequestProtectionRules</a>]]</code> | rules block. |

---

##### `body_inspection_size_limit_exceeded_action_name`<sup>Optional</sup> <a name="body_inspection_size_limit_exceeded_action_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection.property.bodyInspectionSizeLimitExceededActionName"></a>

```python
body_inspection_size_limit_exceeded_action_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#body_inspection_size_limit_exceeded_action_name WafWebAppFirewallPolicy#body_inspection_size_limit_exceeded_action_name}.

---

##### `body_inspection_size_limit_in_bytes`<sup>Optional</sup> <a name="body_inspection_size_limit_in_bytes" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection.property.bodyInspectionSizeLimitInBytes"></a>

```python
body_inspection_size_limit_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#body_inspection_size_limit_in_bytes WafWebAppFirewallPolicy#body_inspection_size_limit_in_bytes}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestProtectionRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules">WafWebAppFirewallPolicyRequestProtectionRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#rules WafWebAppFirewallPolicy#rules}

---

### WafWebAppFirewallPolicyRequestProtectionRules <a name="WafWebAppFirewallPolicyRequestProtectionRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules(
  action_name: str,
  name: str,
  protection_capabilities: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities]],
  type: str,
  condition: str = None,
  condition_language: str = None,
  is_body_inspection_enabled: typing.Union[bool, IResolvable] = None,
  protection_capability_settings: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.actionName">action_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.protectionCapabilities">protection_capabilities</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities</a>]]</code> | protection_capabilities block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.condition">condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.conditionLanguage">condition_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.isBodyInspectionEnabled">is_body_inspection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#is_body_inspection_enabled WafWebAppFirewallPolicy#is_body_inspection_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.protectionCapabilitySettings">protection_capability_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings</a></code> | protection_capability_settings block. |

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}.

---

##### `protection_capabilities`<sup>Required</sup> <a name="protection_capabilities" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.protectionCapabilities"></a>

```python
protection_capabilities: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities</a>]]

protection_capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#protection_capabilities WafWebAppFirewallPolicy#protection_capabilities}

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.condition"></a>

```python
condition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}.

---

##### `condition_language`<sup>Optional</sup> <a name="condition_language" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.conditionLanguage"></a>

```python
condition_language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}.

---

##### `is_body_inspection_enabled`<sup>Optional</sup> <a name="is_body_inspection_enabled" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.isBodyInspectionEnabled"></a>

```python
is_body_inspection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#is_body_inspection_enabled WafWebAppFirewallPolicy#is_body_inspection_enabled}.

---

##### `protection_capability_settings`<sup>Optional</sup> <a name="protection_capability_settings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.protectionCapabilitySettings"></a>

```python
protection_capability_settings: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings</a>

protection_capability_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#protection_capability_settings WafWebAppFirewallPolicy#protection_capability_settings}

---

### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities(
  key: str,
  version: typing.Union[int, float],
  action_name: str = None,
  collaborative_action_threshold: typing.Union[int, float] = None,
  collaborative_weights: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights]] = None,
  exclusions: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#key WafWebAppFirewallPolicy#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.version">version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#version WafWebAppFirewallPolicy#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.actionName">action_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.collaborativeActionThreshold">collaborative_action_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#collaborative_action_threshold WafWebAppFirewallPolicy#collaborative_action_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.collaborativeWeights">collaborative_weights</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights</a>]]</code> | collaborative_weights block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.exclusions">exclusions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions</a></code> | exclusions block. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#key WafWebAppFirewallPolicy#key}.

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#version WafWebAppFirewallPolicy#version}.

---

##### `action_name`<sup>Optional</sup> <a name="action_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}.

---

##### `collaborative_action_threshold`<sup>Optional</sup> <a name="collaborative_action_threshold" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.collaborativeActionThreshold"></a>

```python
collaborative_action_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#collaborative_action_threshold WafWebAppFirewallPolicy#collaborative_action_threshold}.

---

##### `collaborative_weights`<sup>Optional</sup> <a name="collaborative_weights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.collaborativeWeights"></a>

```python
collaborative_weights: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights</a>]]

collaborative_weights block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#collaborative_weights WafWebAppFirewallPolicy#collaborative_weights}

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.exclusions"></a>

```python
exclusions: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions</a>

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#exclusions WafWebAppFirewallPolicy#exclusions}

---

### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights(
  key: str,
  weight: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#key WafWebAppFirewallPolicy#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#weight WafWebAppFirewallPolicy#weight}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#key WafWebAppFirewallPolicy#key}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#weight WafWebAppFirewallPolicy#weight}.

---

### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions(
  args: typing.List[str] = None,
  request_cookies: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions.property.args">args</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#args WafWebAppFirewallPolicy#args}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions.property.requestCookies">request_cookies</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#request_cookies WafWebAppFirewallPolicy#request_cookies}. |

---

##### `args`<sup>Optional</sup> <a name="args" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#args WafWebAppFirewallPolicy#args}.

---

##### `request_cookies`<sup>Optional</sup> <a name="request_cookies" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions.property.requestCookies"></a>

```python
request_cookies: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#request_cookies WafWebAppFirewallPolicy#request_cookies}.

---

### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings(
  allowed_http_methods: typing.List[str] = None,
  max_http_request_header_length: typing.Union[int, float] = None,
  max_http_request_headers: typing.Union[int, float] = None,
  max_number_of_arguments: typing.Union[int, float] = None,
  max_single_argument_length: typing.Union[int, float] = None,
  max_total_argument_length: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.allowedHttpMethods">allowed_http_methods</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#allowed_http_methods WafWebAppFirewallPolicy#allowed_http_methods}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxHttpRequestHeaderLength">max_http_request_header_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_http_request_header_length WafWebAppFirewallPolicy#max_http_request_header_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxHttpRequestHeaders">max_http_request_headers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_http_request_headers WafWebAppFirewallPolicy#max_http_request_headers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxNumberOfArguments">max_number_of_arguments</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_number_of_arguments WafWebAppFirewallPolicy#max_number_of_arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxSingleArgumentLength">max_single_argument_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_single_argument_length WafWebAppFirewallPolicy#max_single_argument_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxTotalArgumentLength">max_total_argument_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_total_argument_length WafWebAppFirewallPolicy#max_total_argument_length}. |

---

##### `allowed_http_methods`<sup>Optional</sup> <a name="allowed_http_methods" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.allowedHttpMethods"></a>

```python
allowed_http_methods: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#allowed_http_methods WafWebAppFirewallPolicy#allowed_http_methods}.

---

##### `max_http_request_header_length`<sup>Optional</sup> <a name="max_http_request_header_length" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxHttpRequestHeaderLength"></a>

```python
max_http_request_header_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_http_request_header_length WafWebAppFirewallPolicy#max_http_request_header_length}.

---

##### `max_http_request_headers`<sup>Optional</sup> <a name="max_http_request_headers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxHttpRequestHeaders"></a>

```python
max_http_request_headers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_http_request_headers WafWebAppFirewallPolicy#max_http_request_headers}.

---

##### `max_number_of_arguments`<sup>Optional</sup> <a name="max_number_of_arguments" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxNumberOfArguments"></a>

```python
max_number_of_arguments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_number_of_arguments WafWebAppFirewallPolicy#max_number_of_arguments}.

---

##### `max_single_argument_length`<sup>Optional</sup> <a name="max_single_argument_length" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxSingleArgumentLength"></a>

```python
max_single_argument_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_single_argument_length WafWebAppFirewallPolicy#max_single_argument_length}.

---

##### `max_total_argument_length`<sup>Optional</sup> <a name="max_total_argument_length" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxTotalArgumentLength"></a>

```python
max_total_argument_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_total_argument_length WafWebAppFirewallPolicy#max_total_argument_length}.

---

### WafWebAppFirewallPolicyRequestRateLimiting <a name="WafWebAppFirewallPolicyRequestRateLimiting" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting(
  rules: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestRateLimitingRules]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules">WafWebAppFirewallPolicyRequestRateLimitingRules</a>]]</code> | rules block. |

---

##### `rules`<sup>Optional</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestRateLimitingRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules">WafWebAppFirewallPolicyRequestRateLimitingRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#rules WafWebAppFirewallPolicy#rules}

---

### WafWebAppFirewallPolicyRequestRateLimitingRules <a name="WafWebAppFirewallPolicyRequestRateLimitingRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules(
  action_name: str,
  configurations: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations]],
  name: str,
  type: str,
  condition: str = None,
  condition_language: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.actionName">action_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.configurations">configurations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations">WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations</a>]]</code> | configurations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.condition">condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.conditionLanguage">condition_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}. |

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}.

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.configurations"></a>

```python
configurations: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations">WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations</a>]]

configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#configurations WafWebAppFirewallPolicy#configurations}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.condition"></a>

```python
condition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}.

---

##### `condition_language`<sup>Optional</sup> <a name="condition_language" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.conditionLanguage"></a>

```python
condition_language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}.

---

### WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations <a name="WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations(
  period_in_seconds: typing.Union[int, float],
  requests_limit: typing.Union[int, float],
  action_duration_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations.property.periodInSeconds">period_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#period_in_seconds WafWebAppFirewallPolicy#period_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations.property.requestsLimit">requests_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#requests_limit WafWebAppFirewallPolicy#requests_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations.property.actionDurationInSeconds">action_duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_duration_in_seconds WafWebAppFirewallPolicy#action_duration_in_seconds}. |

---

##### `period_in_seconds`<sup>Required</sup> <a name="period_in_seconds" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations.property.periodInSeconds"></a>

```python
period_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#period_in_seconds WafWebAppFirewallPolicy#period_in_seconds}.

---

##### `requests_limit`<sup>Required</sup> <a name="requests_limit" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations.property.requestsLimit"></a>

```python
requests_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#requests_limit WafWebAppFirewallPolicy#requests_limit}.

---

##### `action_duration_in_seconds`<sup>Optional</sup> <a name="action_duration_in_seconds" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations.property.actionDurationInSeconds"></a>

```python
action_duration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_duration_in_seconds WafWebAppFirewallPolicy#action_duration_in_seconds}.

---

### WafWebAppFirewallPolicyResponseAccessControl <a name="WafWebAppFirewallPolicyResponseAccessControl" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl(
  rules: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyResponseAccessControlRules]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules">WafWebAppFirewallPolicyResponseAccessControlRules</a>]]</code> | rules block. |

---

##### `rules`<sup>Optional</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyResponseAccessControlRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules">WafWebAppFirewallPolicyResponseAccessControlRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#rules WafWebAppFirewallPolicy#rules}

---

### WafWebAppFirewallPolicyResponseAccessControlRules <a name="WafWebAppFirewallPolicyResponseAccessControlRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules(
  action_name: str,
  name: str,
  type: str,
  condition: str = None,
  condition_language: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.actionName">action_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.condition">condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.conditionLanguage">condition_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}. |

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.condition"></a>

```python
condition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}.

---

##### `condition_language`<sup>Optional</sup> <a name="condition_language" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.conditionLanguage"></a>

```python
condition_language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}.

---

### WafWebAppFirewallPolicyResponseProtection <a name="WafWebAppFirewallPolicyResponseProtection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection(
  rules: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyResponseProtectionRules]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules">WafWebAppFirewallPolicyResponseProtectionRules</a>]]</code> | rules block. |

---

##### `rules`<sup>Optional</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyResponseProtectionRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules">WafWebAppFirewallPolicyResponseProtectionRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#rules WafWebAppFirewallPolicy#rules}

---

### WafWebAppFirewallPolicyResponseProtectionRules <a name="WafWebAppFirewallPolicyResponseProtectionRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules(
  action_name: str,
  name: str,
  protection_capabilities: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities]],
  type: str,
  condition: str = None,
  condition_language: str = None,
  is_body_inspection_enabled: typing.Union[bool, IResolvable] = None,
  protection_capability_settings: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.actionName">action_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.protectionCapabilities">protection_capabilities</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities</a>]]</code> | protection_capabilities block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.condition">condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.conditionLanguage">condition_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.isBodyInspectionEnabled">is_body_inspection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#is_body_inspection_enabled WafWebAppFirewallPolicy#is_body_inspection_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.protectionCapabilitySettings">protection_capability_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings</a></code> | protection_capability_settings block. |

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}.

---

##### `protection_capabilities`<sup>Required</sup> <a name="protection_capabilities" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.protectionCapabilities"></a>

```python
protection_capabilities: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities</a>]]

protection_capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#protection_capabilities WafWebAppFirewallPolicy#protection_capabilities}

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.condition"></a>

```python
condition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}.

---

##### `condition_language`<sup>Optional</sup> <a name="condition_language" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.conditionLanguage"></a>

```python
condition_language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}.

---

##### `is_body_inspection_enabled`<sup>Optional</sup> <a name="is_body_inspection_enabled" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.isBodyInspectionEnabled"></a>

```python
is_body_inspection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#is_body_inspection_enabled WafWebAppFirewallPolicy#is_body_inspection_enabled}.

---

##### `protection_capability_settings`<sup>Optional</sup> <a name="protection_capability_settings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.protectionCapabilitySettings"></a>

```python
protection_capability_settings: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings</a>

protection_capability_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#protection_capability_settings WafWebAppFirewallPolicy#protection_capability_settings}

---

### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities(
  key: str,
  version: typing.Union[int, float],
  action_name: str = None,
  collaborative_action_threshold: typing.Union[int, float] = None,
  collaborative_weights: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights]] = None,
  exclusions: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#key WafWebAppFirewallPolicy#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.version">version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#version WafWebAppFirewallPolicy#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.actionName">action_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.collaborativeActionThreshold">collaborative_action_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#collaborative_action_threshold WafWebAppFirewallPolicy#collaborative_action_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.collaborativeWeights">collaborative_weights</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights</a>]]</code> | collaborative_weights block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.exclusions">exclusions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions</a></code> | exclusions block. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#key WafWebAppFirewallPolicy#key}.

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#version WafWebAppFirewallPolicy#version}.

---

##### `action_name`<sup>Optional</sup> <a name="action_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}.

---

##### `collaborative_action_threshold`<sup>Optional</sup> <a name="collaborative_action_threshold" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.collaborativeActionThreshold"></a>

```python
collaborative_action_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#collaborative_action_threshold WafWebAppFirewallPolicy#collaborative_action_threshold}.

---

##### `collaborative_weights`<sup>Optional</sup> <a name="collaborative_weights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.collaborativeWeights"></a>

```python
collaborative_weights: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights</a>]]

collaborative_weights block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#collaborative_weights WafWebAppFirewallPolicy#collaborative_weights}

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.exclusions"></a>

```python
exclusions: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions</a>

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#exclusions WafWebAppFirewallPolicy#exclusions}

---

### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights(
  key: str,
  weight: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#key WafWebAppFirewallPolicy#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#weight WafWebAppFirewallPolicy#weight}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#key WafWebAppFirewallPolicy#key}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#weight WafWebAppFirewallPolicy#weight}.

---

### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions(
  args: typing.List[str] = None,
  request_cookies: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions.property.args">args</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#args WafWebAppFirewallPolicy#args}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions.property.requestCookies">request_cookies</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#request_cookies WafWebAppFirewallPolicy#request_cookies}. |

---

##### `args`<sup>Optional</sup> <a name="args" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#args WafWebAppFirewallPolicy#args}.

---

##### `request_cookies`<sup>Optional</sup> <a name="request_cookies" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions.property.requestCookies"></a>

```python
request_cookies: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#request_cookies WafWebAppFirewallPolicy#request_cookies}.

---

### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings(
  allowed_http_methods: typing.List[str] = None,
  max_http_request_header_length: typing.Union[int, float] = None,
  max_http_request_headers: typing.Union[int, float] = None,
  max_number_of_arguments: typing.Union[int, float] = None,
  max_single_argument_length: typing.Union[int, float] = None,
  max_total_argument_length: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.allowedHttpMethods">allowed_http_methods</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#allowed_http_methods WafWebAppFirewallPolicy#allowed_http_methods}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxHttpRequestHeaderLength">max_http_request_header_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_http_request_header_length WafWebAppFirewallPolicy#max_http_request_header_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxHttpRequestHeaders">max_http_request_headers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_http_request_headers WafWebAppFirewallPolicy#max_http_request_headers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxNumberOfArguments">max_number_of_arguments</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_number_of_arguments WafWebAppFirewallPolicy#max_number_of_arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxSingleArgumentLength">max_single_argument_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_single_argument_length WafWebAppFirewallPolicy#max_single_argument_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxTotalArgumentLength">max_total_argument_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_total_argument_length WafWebAppFirewallPolicy#max_total_argument_length}. |

---

##### `allowed_http_methods`<sup>Optional</sup> <a name="allowed_http_methods" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.allowedHttpMethods"></a>

```python
allowed_http_methods: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#allowed_http_methods WafWebAppFirewallPolicy#allowed_http_methods}.

---

##### `max_http_request_header_length`<sup>Optional</sup> <a name="max_http_request_header_length" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxHttpRequestHeaderLength"></a>

```python
max_http_request_header_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_http_request_header_length WafWebAppFirewallPolicy#max_http_request_header_length}.

---

##### `max_http_request_headers`<sup>Optional</sup> <a name="max_http_request_headers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxHttpRequestHeaders"></a>

```python
max_http_request_headers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_http_request_headers WafWebAppFirewallPolicy#max_http_request_headers}.

---

##### `max_number_of_arguments`<sup>Optional</sup> <a name="max_number_of_arguments" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxNumberOfArguments"></a>

```python
max_number_of_arguments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_number_of_arguments WafWebAppFirewallPolicy#max_number_of_arguments}.

---

##### `max_single_argument_length`<sup>Optional</sup> <a name="max_single_argument_length" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxSingleArgumentLength"></a>

```python
max_single_argument_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_single_argument_length WafWebAppFirewallPolicy#max_single_argument_length}.

---

##### `max_total_argument_length`<sup>Optional</sup> <a name="max_total_argument_length" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxTotalArgumentLength"></a>

```python
max_total_argument_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_total_argument_length WafWebAppFirewallPolicy#max_total_argument_length}.

---

### WafWebAppFirewallPolicyTimeouts <a name="WafWebAppFirewallPolicyTimeouts" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#create WafWebAppFirewallPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#delete WafWebAppFirewallPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#update WafWebAppFirewallPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#create WafWebAppFirewallPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#delete WafWebAppFirewallPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#update WafWebAppFirewallPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafWebAppFirewallPolicyActionsBodyOutputReference <a name="WafWebAppFirewallPolicyActionsBodyOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.resetTemplate">reset_template</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_template` <a name="reset_template" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.resetTemplate"></a>

```python
def reset_template() -> None
```

##### `reset_text` <a name="reset_text" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.templateInput">template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.template">template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody">WafWebAppFirewallPolicyActionsBody</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `template_input`<sup>Optional</sup> <a name="template_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.templateInput"></a>

```python
template_input: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `template`<sup>Required</sup> <a name="template" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.template"></a>

```python
template: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.internalValue"></a>

```python
internal_value: WafWebAppFirewallPolicyActionsBody
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody">WafWebAppFirewallPolicyActionsBody</a>

---


### WafWebAppFirewallPolicyActionsHeadersList <a name="WafWebAppFirewallPolicyActionsHeadersList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WafWebAppFirewallPolicyActionsHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeaders">WafWebAppFirewallPolicyActionsHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyActionsHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeaders">WafWebAppFirewallPolicyActionsHeaders</a>]]

---


### WafWebAppFirewallPolicyActionsHeadersOutputReference <a name="WafWebAppFirewallPolicyActionsHeadersOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeaders">WafWebAppFirewallPolicyActionsHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WafWebAppFirewallPolicyActionsHeaders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeaders">WafWebAppFirewallPolicyActionsHeaders</a>]

---


### WafWebAppFirewallPolicyActionsList <a name="WafWebAppFirewallPolicyActionsList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WafWebAppFirewallPolicyActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions">WafWebAppFirewallPolicyActions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions">WafWebAppFirewallPolicyActions</a>]]

---


### WafWebAppFirewallPolicyActionsOutputReference <a name="WafWebAppFirewallPolicyActionsOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.putBody">put_body</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.putHeaders">put_headers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.resetBody">reset_body</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.resetCode">reset_code</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_body` <a name="put_body" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.putBody"></a>

```python
def put_body(
  type: str,
  template: str = None,
  text: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.putBody.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}.

---

###### `template`<sup>Optional</sup> <a name="template" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.putBody.parameter.template"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#template WafWebAppFirewallPolicy#template}.

---

###### `text`<sup>Optional</sup> <a name="text" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.putBody.parameter.text"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#text WafWebAppFirewallPolicy#text}.

---

##### `put_headers` <a name="put_headers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.putHeaders"></a>

```python
def put_headers(
  value: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyActionsHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.putHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeaders">WafWebAppFirewallPolicyActionsHeaders</a>]]

---

##### `reset_body` <a name="reset_body" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.resetBody"></a>

```python
def reset_body() -> None
```

##### `reset_code` <a name="reset_code" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.resetCode"></a>

```python
def reset_code() -> None
```

##### `reset_headers` <a name="reset_headers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.body">body</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference">WafWebAppFirewallPolicyActionsBodyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.headers">headers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList">WafWebAppFirewallPolicyActionsHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.bodyInput">body_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody">WafWebAppFirewallPolicyActionsBody</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.codeInput">code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.headersInput">headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeaders">WafWebAppFirewallPolicyActionsHeaders</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions">WafWebAppFirewallPolicyActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.body"></a>

```python
body: WafWebAppFirewallPolicyActionsBodyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference">WafWebAppFirewallPolicyActionsBodyOutputReference</a>

---

##### `headers`<sup>Required</sup> <a name="headers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.headers"></a>

```python
headers: WafWebAppFirewallPolicyActionsHeadersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList">WafWebAppFirewallPolicyActionsHeadersList</a>

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.bodyInput"></a>

```python
body_input: WafWebAppFirewallPolicyActionsBody
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody">WafWebAppFirewallPolicyActionsBody</a>

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.codeInput"></a>

```python
code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.headersInput"></a>

```python
headers_input: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyActionsHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeaders">WafWebAppFirewallPolicyActionsHeaders</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WafWebAppFirewallPolicyActions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions">WafWebAppFirewallPolicyActions</a>]

---


### WafWebAppFirewallPolicyRequestAccessControlOutputReference <a name="WafWebAppFirewallPolicyRequestAccessControlOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.resetRules">reset_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rules` <a name="put_rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestAccessControlRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules">WafWebAppFirewallPolicyRequestAccessControlRules</a>]]

---

##### `reset_rules` <a name="reset_rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.resetRules"></a>

```python
def reset_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList">WafWebAppFirewallPolicyRequestAccessControlRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.defaultActionNameInput">default_action_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules">WafWebAppFirewallPolicyRequestAccessControlRules</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.defaultActionName">default_action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl">WafWebAppFirewallPolicyRequestAccessControl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.rules"></a>

```python
rules: WafWebAppFirewallPolicyRequestAccessControlRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList">WafWebAppFirewallPolicyRequestAccessControlRulesList</a>

---

##### `default_action_name_input`<sup>Optional</sup> <a name="default_action_name_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.defaultActionNameInput"></a>

```python
default_action_name_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestAccessControlRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules">WafWebAppFirewallPolicyRequestAccessControlRules</a>]]

---

##### `default_action_name`<sup>Required</sup> <a name="default_action_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.defaultActionName"></a>

```python
default_action_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.internalValue"></a>

```python
internal_value: WafWebAppFirewallPolicyRequestAccessControl
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl">WafWebAppFirewallPolicyRequestAccessControl</a>

---


### WafWebAppFirewallPolicyRequestAccessControlRulesList <a name="WafWebAppFirewallPolicyRequestAccessControlRulesList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules">WafWebAppFirewallPolicyRequestAccessControlRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestAccessControlRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules">WafWebAppFirewallPolicyRequestAccessControlRules</a>]]

---


### WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference <a name="WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.resetConditionLanguage">reset_condition_language</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_condition` <a name="reset_condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_condition_language` <a name="reset_condition_language" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.resetConditionLanguage"></a>

```python
def reset_condition_language() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.actionNameInput">action_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.conditionLanguageInput">condition_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.actionName">action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.conditionLanguage">condition_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules">WafWebAppFirewallPolicyRequestAccessControlRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_name_input`<sup>Optional</sup> <a name="action_name_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.actionNameInput"></a>

```python
action_name_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `condition_language_input`<sup>Optional</sup> <a name="condition_language_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.conditionLanguageInput"></a>

```python
condition_language_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `condition_language`<sup>Required</sup> <a name="condition_language" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.conditionLanguage"></a>

```python
condition_language: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WafWebAppFirewallPolicyRequestAccessControlRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules">WafWebAppFirewallPolicyRequestAccessControlRules</a>]

---


### WafWebAppFirewallPolicyRequestProtectionOutputReference <a name="WafWebAppFirewallPolicyRequestProtectionOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.resetBodyInspectionSizeLimitExceededActionName">reset_body_inspection_size_limit_exceeded_action_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.resetBodyInspectionSizeLimitInBytes">reset_body_inspection_size_limit_in_bytes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.resetRules">reset_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rules` <a name="put_rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestProtectionRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules">WafWebAppFirewallPolicyRequestProtectionRules</a>]]

---

##### `reset_body_inspection_size_limit_exceeded_action_name` <a name="reset_body_inspection_size_limit_exceeded_action_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.resetBodyInspectionSizeLimitExceededActionName"></a>

```python
def reset_body_inspection_size_limit_exceeded_action_name() -> None
```

##### `reset_body_inspection_size_limit_in_bytes` <a name="reset_body_inspection_size_limit_in_bytes" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.resetBodyInspectionSizeLimitInBytes"></a>

```python
def reset_body_inspection_size_limit_in_bytes() -> None
```

##### `reset_rules` <a name="reset_rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.resetRules"></a>

```python
def reset_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList">WafWebAppFirewallPolicyRequestProtectionRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitExceededActionNameInput">body_inspection_size_limit_exceeded_action_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitInBytesInput">body_inspection_size_limit_in_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules">WafWebAppFirewallPolicyRequestProtectionRules</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitExceededActionName">body_inspection_size_limit_exceeded_action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitInBytes">body_inspection_size_limit_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection">WafWebAppFirewallPolicyRequestProtection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.rules"></a>

```python
rules: WafWebAppFirewallPolicyRequestProtectionRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList">WafWebAppFirewallPolicyRequestProtectionRulesList</a>

---

##### `body_inspection_size_limit_exceeded_action_name_input`<sup>Optional</sup> <a name="body_inspection_size_limit_exceeded_action_name_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitExceededActionNameInput"></a>

```python
body_inspection_size_limit_exceeded_action_name_input: str
```

- *Type:* str

---

##### `body_inspection_size_limit_in_bytes_input`<sup>Optional</sup> <a name="body_inspection_size_limit_in_bytes_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitInBytesInput"></a>

```python
body_inspection_size_limit_in_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestProtectionRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules">WafWebAppFirewallPolicyRequestProtectionRules</a>]]

---

##### `body_inspection_size_limit_exceeded_action_name`<sup>Required</sup> <a name="body_inspection_size_limit_exceeded_action_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitExceededActionName"></a>

```python
body_inspection_size_limit_exceeded_action_name: str
```

- *Type:* str

---

##### `body_inspection_size_limit_in_bytes`<sup>Required</sup> <a name="body_inspection_size_limit_in_bytes" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitInBytes"></a>

```python
body_inspection_size_limit_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.internalValue"></a>

```python
internal_value: WafWebAppFirewallPolicyRequestProtection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection">WafWebAppFirewallPolicyRequestProtection</a>

---


### WafWebAppFirewallPolicyRequestProtectionRulesList <a name="WafWebAppFirewallPolicyRequestProtectionRulesList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WafWebAppFirewallPolicyRequestProtectionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules">WafWebAppFirewallPolicyRequestProtectionRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestProtectionRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules">WafWebAppFirewallPolicyRequestProtectionRules</a>]]

---


### WafWebAppFirewallPolicyRequestProtectionRulesOutputReference <a name="WafWebAppFirewallPolicyRequestProtectionRulesOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.putProtectionCapabilities">put_protection_capabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.putProtectionCapabilitySettings">put_protection_capability_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resetConditionLanguage">reset_condition_language</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resetIsBodyInspectionEnabled">reset_is_body_inspection_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resetProtectionCapabilitySettings">reset_protection_capability_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_protection_capabilities` <a name="put_protection_capabilities" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.putProtectionCapabilities"></a>

```python
def put_protection_capabilities(
  value: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.putProtectionCapabilities.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities</a>]]

---

##### `put_protection_capability_settings` <a name="put_protection_capability_settings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.putProtectionCapabilitySettings"></a>

```python
def put_protection_capability_settings(
  allowed_http_methods: typing.List[str] = None,
  max_http_request_header_length: typing.Union[int, float] = None,
  max_http_request_headers: typing.Union[int, float] = None,
  max_number_of_arguments: typing.Union[int, float] = None,
  max_single_argument_length: typing.Union[int, float] = None,
  max_total_argument_length: typing.Union[int, float] = None
) -> None
```

###### `allowed_http_methods`<sup>Optional</sup> <a name="allowed_http_methods" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.putProtectionCapabilitySettings.parameter.allowedHttpMethods"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#allowed_http_methods WafWebAppFirewallPolicy#allowed_http_methods}.

---

###### `max_http_request_header_length`<sup>Optional</sup> <a name="max_http_request_header_length" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.putProtectionCapabilitySettings.parameter.maxHttpRequestHeaderLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_http_request_header_length WafWebAppFirewallPolicy#max_http_request_header_length}.

---

###### `max_http_request_headers`<sup>Optional</sup> <a name="max_http_request_headers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.putProtectionCapabilitySettings.parameter.maxHttpRequestHeaders"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_http_request_headers WafWebAppFirewallPolicy#max_http_request_headers}.

---

###### `max_number_of_arguments`<sup>Optional</sup> <a name="max_number_of_arguments" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.putProtectionCapabilitySettings.parameter.maxNumberOfArguments"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_number_of_arguments WafWebAppFirewallPolicy#max_number_of_arguments}.

---

###### `max_single_argument_length`<sup>Optional</sup> <a name="max_single_argument_length" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.putProtectionCapabilitySettings.parameter.maxSingleArgumentLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_single_argument_length WafWebAppFirewallPolicy#max_single_argument_length}.

---

###### `max_total_argument_length`<sup>Optional</sup> <a name="max_total_argument_length" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.putProtectionCapabilitySettings.parameter.maxTotalArgumentLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_total_argument_length WafWebAppFirewallPolicy#max_total_argument_length}.

---

##### `reset_condition` <a name="reset_condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_condition_language` <a name="reset_condition_language" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resetConditionLanguage"></a>

```python
def reset_condition_language() -> None
```

##### `reset_is_body_inspection_enabled` <a name="reset_is_body_inspection_enabled" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resetIsBodyInspectionEnabled"></a>

```python
def reset_is_body_inspection_enabled() -> None
```

##### `reset_protection_capability_settings` <a name="reset_protection_capability_settings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resetProtectionCapabilitySettings"></a>

```python
def reset_protection_capability_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilities">protection_capabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilitySettings">protection_capability_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.actionNameInput">action_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.conditionLanguageInput">condition_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.isBodyInspectionEnabledInput">is_body_inspection_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilitiesInput">protection_capabilities_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilitySettingsInput">protection_capability_settings_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.actionName">action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.conditionLanguage">condition_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.isBodyInspectionEnabled">is_body_inspection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules">WafWebAppFirewallPolicyRequestProtectionRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `protection_capabilities`<sup>Required</sup> <a name="protection_capabilities" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilities"></a>

```python
protection_capabilities: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList</a>

---

##### `protection_capability_settings`<sup>Required</sup> <a name="protection_capability_settings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilitySettings"></a>

```python
protection_capability_settings: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference</a>

---

##### `action_name_input`<sup>Optional</sup> <a name="action_name_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.actionNameInput"></a>

```python
action_name_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `condition_language_input`<sup>Optional</sup> <a name="condition_language_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.conditionLanguageInput"></a>

```python
condition_language_input: str
```

- *Type:* str

---

##### `is_body_inspection_enabled_input`<sup>Optional</sup> <a name="is_body_inspection_enabled_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.isBodyInspectionEnabledInput"></a>

```python
is_body_inspection_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protection_capabilities_input`<sup>Optional</sup> <a name="protection_capabilities_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilitiesInput"></a>

```python
protection_capabilities_input: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities</a>]]

---

##### `protection_capability_settings_input`<sup>Optional</sup> <a name="protection_capability_settings_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilitySettingsInput"></a>

```python
protection_capability_settings_input: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `condition_language`<sup>Required</sup> <a name="condition_language" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.conditionLanguage"></a>

```python
condition_language: str
```

- *Type:* str

---

##### `is_body_inspection_enabled`<sup>Required</sup> <a name="is_body_inspection_enabled" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.isBodyInspectionEnabled"></a>

```python
is_body_inspection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WafWebAppFirewallPolicyRequestProtectionRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules">WafWebAppFirewallPolicyRequestProtectionRules</a>]

---


### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights</a>]]

---


### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights</a>]

---


### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resetRequestCookies">reset_request_cookies</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_args` <a name="reset_args" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_request_cookies` <a name="reset_request_cookies" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resetRequestCookies"></a>

```python
def reset_request_cookies() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookiesInput">request_cookies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies">request_cookies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `request_cookies_input`<sup>Optional</sup> <a name="request_cookies_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookiesInput"></a>

```python
request_cookies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args`<sup>Required</sup> <a name="args" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `request_cookies`<sup>Required</sup> <a name="request_cookies" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies"></a>

```python
request_cookies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue"></a>

```python
internal_value: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions</a>

---


### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities</a>]]

---


### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.putCollaborativeWeights">put_collaborative_weights</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.putExclusions">put_exclusions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resetActionName">reset_action_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resetCollaborativeActionThreshold">reset_collaborative_action_threshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resetCollaborativeWeights">reset_collaborative_weights</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resetExclusions">reset_exclusions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_collaborative_weights` <a name="put_collaborative_weights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.putCollaborativeWeights"></a>

```python
def put_collaborative_weights(
  value: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.putCollaborativeWeights.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights</a>]]

---

##### `put_exclusions` <a name="put_exclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.putExclusions"></a>

```python
def put_exclusions(
  args: typing.List[str] = None,
  request_cookies: typing.List[str] = None
) -> None
```

###### `args`<sup>Optional</sup> <a name="args" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.putExclusions.parameter.args"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#args WafWebAppFirewallPolicy#args}.

---

###### `request_cookies`<sup>Optional</sup> <a name="request_cookies" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.putExclusions.parameter.requestCookies"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#request_cookies WafWebAppFirewallPolicy#request_cookies}.

---

##### `reset_action_name` <a name="reset_action_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resetActionName"></a>

```python
def reset_action_name() -> None
```

##### `reset_collaborative_action_threshold` <a name="reset_collaborative_action_threshold" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resetCollaborativeActionThreshold"></a>

```python
def reset_collaborative_action_threshold() -> None
```

##### `reset_collaborative_weights` <a name="reset_collaborative_weights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resetCollaborativeWeights"></a>

```python
def reset_collaborative_weights() -> None
```

##### `reset_exclusions` <a name="reset_exclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resetExclusions"></a>

```python
def reset_exclusions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights">collaborative_weights</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions">exclusions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.actionNameInput">action_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThresholdInput">collaborative_action_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeightsInput">collaborative_weights_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.exclusionsInput">exclusions_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.versionInput">version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.actionName">action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold">collaborative_action_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `collaborative_weights`<sup>Required</sup> <a name="collaborative_weights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights"></a>

```python
collaborative_weights: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a>

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions"></a>

```python
exclusions: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference</a>

---

##### `action_name_input`<sup>Optional</sup> <a name="action_name_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.actionNameInput"></a>

```python
action_name_input: str
```

- *Type:* str

---

##### `collaborative_action_threshold_input`<sup>Optional</sup> <a name="collaborative_action_threshold_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThresholdInput"></a>

```python
collaborative_action_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `collaborative_weights_input`<sup>Optional</sup> <a name="collaborative_weights_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeightsInput"></a>

```python
collaborative_weights_input: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights</a>]]

---

##### `exclusions_input`<sup>Optional</sup> <a name="exclusions_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.exclusionsInput"></a>

```python
exclusions_input: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions</a>

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.versionInput"></a>

```python
version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

---

##### `collaborative_action_threshold`<sup>Required</sup> <a name="collaborative_action_threshold" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold"></a>

```python
collaborative_action_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities</a>]

---


### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetAllowedHttpMethods">reset_allowed_http_methods</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxHttpRequestHeaderLength">reset_max_http_request_header_length</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxHttpRequestHeaders">reset_max_http_request_headers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxNumberOfArguments">reset_max_number_of_arguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxSingleArgumentLength">reset_max_single_argument_length</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxTotalArgumentLength">reset_max_total_argument_length</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_http_methods` <a name="reset_allowed_http_methods" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetAllowedHttpMethods"></a>

```python
def reset_allowed_http_methods() -> None
```

##### `reset_max_http_request_header_length` <a name="reset_max_http_request_header_length" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxHttpRequestHeaderLength"></a>

```python
def reset_max_http_request_header_length() -> None
```

##### `reset_max_http_request_headers` <a name="reset_max_http_request_headers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxHttpRequestHeaders"></a>

```python
def reset_max_http_request_headers() -> None
```

##### `reset_max_number_of_arguments` <a name="reset_max_number_of_arguments" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxNumberOfArguments"></a>

```python
def reset_max_number_of_arguments() -> None
```

##### `reset_max_single_argument_length` <a name="reset_max_single_argument_length" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxSingleArgumentLength"></a>

```python
def reset_max_single_argument_length() -> None
```

##### `reset_max_total_argument_length` <a name="reset_max_total_argument_length" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxTotalArgumentLength"></a>

```python
def reset_max_total_argument_length() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethodsInput">allowed_http_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLengthInput">max_http_request_header_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeadersInput">max_http_request_headers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArgumentsInput">max_number_of_arguments_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLengthInput">max_single_argument_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLengthInput">max_total_argument_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods">allowed_http_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength">max_http_request_header_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders">max_http_request_headers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments">max_number_of_arguments</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength">max_single_argument_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength">max_total_argument_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_http_methods_input`<sup>Optional</sup> <a name="allowed_http_methods_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethodsInput"></a>

```python
allowed_http_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_http_request_header_length_input`<sup>Optional</sup> <a name="max_http_request_header_length_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLengthInput"></a>

```python
max_http_request_header_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_http_request_headers_input`<sup>Optional</sup> <a name="max_http_request_headers_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeadersInput"></a>

```python
max_http_request_headers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_number_of_arguments_input`<sup>Optional</sup> <a name="max_number_of_arguments_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArgumentsInput"></a>

```python
max_number_of_arguments_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_single_argument_length_input`<sup>Optional</sup> <a name="max_single_argument_length_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLengthInput"></a>

```python
max_single_argument_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_total_argument_length_input`<sup>Optional</sup> <a name="max_total_argument_length_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLengthInput"></a>

```python
max_total_argument_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_http_methods`<sup>Required</sup> <a name="allowed_http_methods" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods"></a>

```python
allowed_http_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_http_request_header_length`<sup>Required</sup> <a name="max_http_request_header_length" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength"></a>

```python
max_http_request_header_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_http_request_headers`<sup>Required</sup> <a name="max_http_request_headers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders"></a>

```python
max_http_request_headers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_number_of_arguments`<sup>Required</sup> <a name="max_number_of_arguments" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments"></a>

```python
max_number_of_arguments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_single_argument_length`<sup>Required</sup> <a name="max_single_argument_length" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength"></a>

```python
max_single_argument_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_total_argument_length`<sup>Required</sup> <a name="max_total_argument_length" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength"></a>

```python
max_total_argument_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue"></a>

```python
internal_value: WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings</a>

---


### WafWebAppFirewallPolicyRequestRateLimitingOutputReference <a name="WafWebAppFirewallPolicyRequestRateLimitingOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.resetRules">reset_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rules` <a name="put_rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestRateLimitingRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules">WafWebAppFirewallPolicyRequestRateLimitingRules</a>]]

---

##### `reset_rules` <a name="reset_rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.resetRules"></a>

```python
def reset_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList">WafWebAppFirewallPolicyRequestRateLimitingRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules">WafWebAppFirewallPolicyRequestRateLimitingRules</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting">WafWebAppFirewallPolicyRequestRateLimiting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.rules"></a>

```python
rules: WafWebAppFirewallPolicyRequestRateLimitingRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList">WafWebAppFirewallPolicyRequestRateLimitingRulesList</a>

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestRateLimitingRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules">WafWebAppFirewallPolicyRequestRateLimitingRules</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.internalValue"></a>

```python
internal_value: WafWebAppFirewallPolicyRequestRateLimiting
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting">WafWebAppFirewallPolicyRequestRateLimiting</a>

---


### WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList <a name="WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations">WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations">WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations</a>]]

---


### WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference <a name="WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.resetActionDurationInSeconds">reset_action_duration_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action_duration_in_seconds` <a name="reset_action_duration_in_seconds" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.resetActionDurationInSeconds"></a>

```python
def reset_action_duration_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.actionDurationInSecondsInput">action_duration_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.periodInSecondsInput">period_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.requestsLimitInput">requests_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.actionDurationInSeconds">action_duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.periodInSeconds">period_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.requestsLimit">requests_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations">WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_duration_in_seconds_input`<sup>Optional</sup> <a name="action_duration_in_seconds_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.actionDurationInSecondsInput"></a>

```python
action_duration_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_in_seconds_input`<sup>Optional</sup> <a name="period_in_seconds_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.periodInSecondsInput"></a>

```python
period_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `requests_limit_input`<sup>Optional</sup> <a name="requests_limit_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.requestsLimitInput"></a>

```python
requests_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `action_duration_in_seconds`<sup>Required</sup> <a name="action_duration_in_seconds" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.actionDurationInSeconds"></a>

```python
action_duration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_in_seconds`<sup>Required</sup> <a name="period_in_seconds" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.periodInSeconds"></a>

```python
period_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `requests_limit`<sup>Required</sup> <a name="requests_limit" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.requestsLimit"></a>

```python
requests_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations">WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations</a>]

---


### WafWebAppFirewallPolicyRequestRateLimitingRulesList <a name="WafWebAppFirewallPolicyRequestRateLimitingRulesList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules">WafWebAppFirewallPolicyRequestRateLimitingRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestRateLimitingRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules">WafWebAppFirewallPolicyRequestRateLimitingRules</a>]]

---


### WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference <a name="WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.putConfigurations">put_configurations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.resetConditionLanguage">reset_condition_language</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_configurations` <a name="put_configurations" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.putConfigurations"></a>

```python
def put_configurations(
  value: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.putConfigurations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations">WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations</a>]]

---

##### `reset_condition` <a name="reset_condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_condition_language` <a name="reset_condition_language" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.resetConditionLanguage"></a>

```python
def reset_condition_language() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList">WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.actionNameInput">action_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.conditionLanguageInput">condition_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.configurationsInput">configurations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations">WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.actionName">action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.conditionLanguage">condition_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules">WafWebAppFirewallPolicyRequestRateLimitingRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.configurations"></a>

```python
configurations: WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList">WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList</a>

---

##### `action_name_input`<sup>Optional</sup> <a name="action_name_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.actionNameInput"></a>

```python
action_name_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `condition_language_input`<sup>Optional</sup> <a name="condition_language_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.conditionLanguageInput"></a>

```python
condition_language_input: str
```

- *Type:* str

---

##### `configurations_input`<sup>Optional</sup> <a name="configurations_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.configurationsInput"></a>

```python
configurations_input: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations">WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `condition_language`<sup>Required</sup> <a name="condition_language" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.conditionLanguage"></a>

```python
condition_language: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WafWebAppFirewallPolicyRequestRateLimitingRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules">WafWebAppFirewallPolicyRequestRateLimitingRules</a>]

---


### WafWebAppFirewallPolicyResponseAccessControlOutputReference <a name="WafWebAppFirewallPolicyResponseAccessControlOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.resetRules">reset_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rules` <a name="put_rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyResponseAccessControlRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules">WafWebAppFirewallPolicyResponseAccessControlRules</a>]]

---

##### `reset_rules` <a name="reset_rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.resetRules"></a>

```python
def reset_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList">WafWebAppFirewallPolicyResponseAccessControlRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules">WafWebAppFirewallPolicyResponseAccessControlRules</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl">WafWebAppFirewallPolicyResponseAccessControl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.rules"></a>

```python
rules: WafWebAppFirewallPolicyResponseAccessControlRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList">WafWebAppFirewallPolicyResponseAccessControlRulesList</a>

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyResponseAccessControlRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules">WafWebAppFirewallPolicyResponseAccessControlRules</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.internalValue"></a>

```python
internal_value: WafWebAppFirewallPolicyResponseAccessControl
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl">WafWebAppFirewallPolicyResponseAccessControl</a>

---


### WafWebAppFirewallPolicyResponseAccessControlRulesList <a name="WafWebAppFirewallPolicyResponseAccessControlRulesList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules">WafWebAppFirewallPolicyResponseAccessControlRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyResponseAccessControlRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules">WafWebAppFirewallPolicyResponseAccessControlRules</a>]]

---


### WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference <a name="WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.resetConditionLanguage">reset_condition_language</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_condition` <a name="reset_condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_condition_language` <a name="reset_condition_language" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.resetConditionLanguage"></a>

```python
def reset_condition_language() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.actionNameInput">action_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.conditionLanguageInput">condition_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.actionName">action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.conditionLanguage">condition_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules">WafWebAppFirewallPolicyResponseAccessControlRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_name_input`<sup>Optional</sup> <a name="action_name_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.actionNameInput"></a>

```python
action_name_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `condition_language_input`<sup>Optional</sup> <a name="condition_language_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.conditionLanguageInput"></a>

```python
condition_language_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `condition_language`<sup>Required</sup> <a name="condition_language" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.conditionLanguage"></a>

```python
condition_language: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WafWebAppFirewallPolicyResponseAccessControlRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules">WafWebAppFirewallPolicyResponseAccessControlRules</a>]

---


### WafWebAppFirewallPolicyResponseProtectionOutputReference <a name="WafWebAppFirewallPolicyResponseProtectionOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.resetRules">reset_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rules` <a name="put_rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyResponseProtectionRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules">WafWebAppFirewallPolicyResponseProtectionRules</a>]]

---

##### `reset_rules` <a name="reset_rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.resetRules"></a>

```python
def reset_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList">WafWebAppFirewallPolicyResponseProtectionRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules">WafWebAppFirewallPolicyResponseProtectionRules</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection">WafWebAppFirewallPolicyResponseProtection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.rules"></a>

```python
rules: WafWebAppFirewallPolicyResponseProtectionRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList">WafWebAppFirewallPolicyResponseProtectionRulesList</a>

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyResponseProtectionRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules">WafWebAppFirewallPolicyResponseProtectionRules</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.internalValue"></a>

```python
internal_value: WafWebAppFirewallPolicyResponseProtection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection">WafWebAppFirewallPolicyResponseProtection</a>

---


### WafWebAppFirewallPolicyResponseProtectionRulesList <a name="WafWebAppFirewallPolicyResponseProtectionRulesList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WafWebAppFirewallPolicyResponseProtectionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules">WafWebAppFirewallPolicyResponseProtectionRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyResponseProtectionRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules">WafWebAppFirewallPolicyResponseProtectionRules</a>]]

---


### WafWebAppFirewallPolicyResponseProtectionRulesOutputReference <a name="WafWebAppFirewallPolicyResponseProtectionRulesOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.putProtectionCapabilities">put_protection_capabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.putProtectionCapabilitySettings">put_protection_capability_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resetConditionLanguage">reset_condition_language</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resetIsBodyInspectionEnabled">reset_is_body_inspection_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resetProtectionCapabilitySettings">reset_protection_capability_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_protection_capabilities` <a name="put_protection_capabilities" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.putProtectionCapabilities"></a>

```python
def put_protection_capabilities(
  value: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.putProtectionCapabilities.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities</a>]]

---

##### `put_protection_capability_settings` <a name="put_protection_capability_settings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.putProtectionCapabilitySettings"></a>

```python
def put_protection_capability_settings(
  allowed_http_methods: typing.List[str] = None,
  max_http_request_header_length: typing.Union[int, float] = None,
  max_http_request_headers: typing.Union[int, float] = None,
  max_number_of_arguments: typing.Union[int, float] = None,
  max_single_argument_length: typing.Union[int, float] = None,
  max_total_argument_length: typing.Union[int, float] = None
) -> None
```

###### `allowed_http_methods`<sup>Optional</sup> <a name="allowed_http_methods" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.putProtectionCapabilitySettings.parameter.allowedHttpMethods"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#allowed_http_methods WafWebAppFirewallPolicy#allowed_http_methods}.

---

###### `max_http_request_header_length`<sup>Optional</sup> <a name="max_http_request_header_length" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.putProtectionCapabilitySettings.parameter.maxHttpRequestHeaderLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_http_request_header_length WafWebAppFirewallPolicy#max_http_request_header_length}.

---

###### `max_http_request_headers`<sup>Optional</sup> <a name="max_http_request_headers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.putProtectionCapabilitySettings.parameter.maxHttpRequestHeaders"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_http_request_headers WafWebAppFirewallPolicy#max_http_request_headers}.

---

###### `max_number_of_arguments`<sup>Optional</sup> <a name="max_number_of_arguments" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.putProtectionCapabilitySettings.parameter.maxNumberOfArguments"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_number_of_arguments WafWebAppFirewallPolicy#max_number_of_arguments}.

---

###### `max_single_argument_length`<sup>Optional</sup> <a name="max_single_argument_length" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.putProtectionCapabilitySettings.parameter.maxSingleArgumentLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_single_argument_length WafWebAppFirewallPolicy#max_single_argument_length}.

---

###### `max_total_argument_length`<sup>Optional</sup> <a name="max_total_argument_length" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.putProtectionCapabilitySettings.parameter.maxTotalArgumentLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_total_argument_length WafWebAppFirewallPolicy#max_total_argument_length}.

---

##### `reset_condition` <a name="reset_condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_condition_language` <a name="reset_condition_language" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resetConditionLanguage"></a>

```python
def reset_condition_language() -> None
```

##### `reset_is_body_inspection_enabled` <a name="reset_is_body_inspection_enabled" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resetIsBodyInspectionEnabled"></a>

```python
def reset_is_body_inspection_enabled() -> None
```

##### `reset_protection_capability_settings` <a name="reset_protection_capability_settings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resetProtectionCapabilitySettings"></a>

```python
def reset_protection_capability_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilities">protection_capabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilitySettings">protection_capability_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.actionNameInput">action_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.conditionLanguageInput">condition_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.isBodyInspectionEnabledInput">is_body_inspection_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilitiesInput">protection_capabilities_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilitySettingsInput">protection_capability_settings_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.actionName">action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.conditionLanguage">condition_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.isBodyInspectionEnabled">is_body_inspection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules">WafWebAppFirewallPolicyResponseProtectionRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `protection_capabilities`<sup>Required</sup> <a name="protection_capabilities" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilities"></a>

```python
protection_capabilities: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList</a>

---

##### `protection_capability_settings`<sup>Required</sup> <a name="protection_capability_settings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilitySettings"></a>

```python
protection_capability_settings: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference</a>

---

##### `action_name_input`<sup>Optional</sup> <a name="action_name_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.actionNameInput"></a>

```python
action_name_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `condition_language_input`<sup>Optional</sup> <a name="condition_language_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.conditionLanguageInput"></a>

```python
condition_language_input: str
```

- *Type:* str

---

##### `is_body_inspection_enabled_input`<sup>Optional</sup> <a name="is_body_inspection_enabled_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.isBodyInspectionEnabledInput"></a>

```python
is_body_inspection_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protection_capabilities_input`<sup>Optional</sup> <a name="protection_capabilities_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilitiesInput"></a>

```python
protection_capabilities_input: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities</a>]]

---

##### `protection_capability_settings_input`<sup>Optional</sup> <a name="protection_capability_settings_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilitySettingsInput"></a>

```python
protection_capability_settings_input: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `condition_language`<sup>Required</sup> <a name="condition_language" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.conditionLanguage"></a>

```python
condition_language: str
```

- *Type:* str

---

##### `is_body_inspection_enabled`<sup>Required</sup> <a name="is_body_inspection_enabled" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.isBodyInspectionEnabled"></a>

```python
is_body_inspection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WafWebAppFirewallPolicyResponseProtectionRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules">WafWebAppFirewallPolicyResponseProtectionRules</a>]

---


### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights</a>]]

---


### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights</a>]

---


### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resetRequestCookies">reset_request_cookies</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_args` <a name="reset_args" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_request_cookies` <a name="reset_request_cookies" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resetRequestCookies"></a>

```python
def reset_request_cookies() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookiesInput">request_cookies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies">request_cookies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `request_cookies_input`<sup>Optional</sup> <a name="request_cookies_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookiesInput"></a>

```python
request_cookies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args`<sup>Required</sup> <a name="args" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `request_cookies`<sup>Required</sup> <a name="request_cookies" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies"></a>

```python
request_cookies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue"></a>

```python
internal_value: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions</a>

---


### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities</a>]]

---


### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.putCollaborativeWeights">put_collaborative_weights</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.putExclusions">put_exclusions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resetActionName">reset_action_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resetCollaborativeActionThreshold">reset_collaborative_action_threshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resetCollaborativeWeights">reset_collaborative_weights</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resetExclusions">reset_exclusions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_collaborative_weights` <a name="put_collaborative_weights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.putCollaborativeWeights"></a>

```python
def put_collaborative_weights(
  value: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.putCollaborativeWeights.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights</a>]]

---

##### `put_exclusions` <a name="put_exclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.putExclusions"></a>

```python
def put_exclusions(
  args: typing.List[str] = None,
  request_cookies: typing.List[str] = None
) -> None
```

###### `args`<sup>Optional</sup> <a name="args" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.putExclusions.parameter.args"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#args WafWebAppFirewallPolicy#args}.

---

###### `request_cookies`<sup>Optional</sup> <a name="request_cookies" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.putExclusions.parameter.requestCookies"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#request_cookies WafWebAppFirewallPolicy#request_cookies}.

---

##### `reset_action_name` <a name="reset_action_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resetActionName"></a>

```python
def reset_action_name() -> None
```

##### `reset_collaborative_action_threshold` <a name="reset_collaborative_action_threshold" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resetCollaborativeActionThreshold"></a>

```python
def reset_collaborative_action_threshold() -> None
```

##### `reset_collaborative_weights` <a name="reset_collaborative_weights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resetCollaborativeWeights"></a>

```python
def reset_collaborative_weights() -> None
```

##### `reset_exclusions` <a name="reset_exclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resetExclusions"></a>

```python
def reset_exclusions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights">collaborative_weights</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions">exclusions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.actionNameInput">action_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThresholdInput">collaborative_action_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeightsInput">collaborative_weights_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.exclusionsInput">exclusions_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.versionInput">version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.actionName">action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold">collaborative_action_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `collaborative_weights`<sup>Required</sup> <a name="collaborative_weights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights"></a>

```python
collaborative_weights: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a>

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions"></a>

```python
exclusions: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference</a>

---

##### `action_name_input`<sup>Optional</sup> <a name="action_name_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.actionNameInput"></a>

```python
action_name_input: str
```

- *Type:* str

---

##### `collaborative_action_threshold_input`<sup>Optional</sup> <a name="collaborative_action_threshold_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThresholdInput"></a>

```python
collaborative_action_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `collaborative_weights_input`<sup>Optional</sup> <a name="collaborative_weights_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeightsInput"></a>

```python
collaborative_weights_input: typing.Union[IResolvable, typing.List[WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights</a>]]

---

##### `exclusions_input`<sup>Optional</sup> <a name="exclusions_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.exclusionsInput"></a>

```python
exclusions_input: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions</a>

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.versionInput"></a>

```python
version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

---

##### `collaborative_action_threshold`<sup>Required</sup> <a name="collaborative_action_threshold" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold"></a>

```python
collaborative_action_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities</a>]

---


### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetAllowedHttpMethods">reset_allowed_http_methods</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxHttpRequestHeaderLength">reset_max_http_request_header_length</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxHttpRequestHeaders">reset_max_http_request_headers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxNumberOfArguments">reset_max_number_of_arguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxSingleArgumentLength">reset_max_single_argument_length</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxTotalArgumentLength">reset_max_total_argument_length</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_http_methods` <a name="reset_allowed_http_methods" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetAllowedHttpMethods"></a>

```python
def reset_allowed_http_methods() -> None
```

##### `reset_max_http_request_header_length` <a name="reset_max_http_request_header_length" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxHttpRequestHeaderLength"></a>

```python
def reset_max_http_request_header_length() -> None
```

##### `reset_max_http_request_headers` <a name="reset_max_http_request_headers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxHttpRequestHeaders"></a>

```python
def reset_max_http_request_headers() -> None
```

##### `reset_max_number_of_arguments` <a name="reset_max_number_of_arguments" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxNumberOfArguments"></a>

```python
def reset_max_number_of_arguments() -> None
```

##### `reset_max_single_argument_length` <a name="reset_max_single_argument_length" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxSingleArgumentLength"></a>

```python
def reset_max_single_argument_length() -> None
```

##### `reset_max_total_argument_length` <a name="reset_max_total_argument_length" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxTotalArgumentLength"></a>

```python
def reset_max_total_argument_length() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethodsInput">allowed_http_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLengthInput">max_http_request_header_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeadersInput">max_http_request_headers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArgumentsInput">max_number_of_arguments_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLengthInput">max_single_argument_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLengthInput">max_total_argument_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods">allowed_http_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength">max_http_request_header_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders">max_http_request_headers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments">max_number_of_arguments</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength">max_single_argument_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength">max_total_argument_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_http_methods_input`<sup>Optional</sup> <a name="allowed_http_methods_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethodsInput"></a>

```python
allowed_http_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_http_request_header_length_input`<sup>Optional</sup> <a name="max_http_request_header_length_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLengthInput"></a>

```python
max_http_request_header_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_http_request_headers_input`<sup>Optional</sup> <a name="max_http_request_headers_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeadersInput"></a>

```python
max_http_request_headers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_number_of_arguments_input`<sup>Optional</sup> <a name="max_number_of_arguments_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArgumentsInput"></a>

```python
max_number_of_arguments_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_single_argument_length_input`<sup>Optional</sup> <a name="max_single_argument_length_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLengthInput"></a>

```python
max_single_argument_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_total_argument_length_input`<sup>Optional</sup> <a name="max_total_argument_length_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLengthInput"></a>

```python
max_total_argument_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_http_methods`<sup>Required</sup> <a name="allowed_http_methods" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods"></a>

```python
allowed_http_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_http_request_header_length`<sup>Required</sup> <a name="max_http_request_header_length" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength"></a>

```python
max_http_request_header_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_http_request_headers`<sup>Required</sup> <a name="max_http_request_headers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders"></a>

```python
max_http_request_headers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_number_of_arguments`<sup>Required</sup> <a name="max_number_of_arguments" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments"></a>

```python
max_number_of_arguments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_single_argument_length`<sup>Required</sup> <a name="max_single_argument_length" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength"></a>

```python
max_single_argument_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_total_argument_length`<sup>Required</sup> <a name="max_total_argument_length" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength"></a>

```python
max_total_argument_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue"></a>

```python
internal_value: WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings</a>

---


### WafWebAppFirewallPolicyTimeoutsOutputReference <a name="WafWebAppFirewallPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import waf_web_app_firewall_policy

wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts">WafWebAppFirewallPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WafWebAppFirewallPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts">WafWebAppFirewallPolicyTimeouts</a>]

---



