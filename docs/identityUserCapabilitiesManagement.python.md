# `identityUserCapabilitiesManagement` Submodule <a name="`identityUserCapabilitiesManagement` Submodule" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityUserCapabilitiesManagement <a name="IdentityUserCapabilitiesManagement" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management oci_identity_user_capabilities_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_user_capabilities_management

identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  user_id: str,
  can_use_api_keys: typing.Union[bool, IResolvable] = None,
  can_use_auth_tokens: typing.Union[bool, IResolvable] = None,
  can_use_console_password: typing.Union[bool, IResolvable] = None,
  can_use_customer_secret_keys: typing.Union[bool, IResolvable] = None,
  can_use_smtp_credentials: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: IdentityUserCapabilitiesManagementTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#user_id IdentityUserCapabilitiesManagement#user_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.canUseApiKeys">can_use_api_keys</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_api_keys IdentityUserCapabilitiesManagement#can_use_api_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.canUseAuthTokens">can_use_auth_tokens</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_auth_tokens IdentityUserCapabilitiesManagement#can_use_auth_tokens}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.canUseConsolePassword">can_use_console_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_console_password IdentityUserCapabilitiesManagement#can_use_console_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.canUseCustomerSecretKeys">can_use_customer_secret_keys</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_customer_secret_keys IdentityUserCapabilitiesManagement#can_use_customer_secret_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.canUseSmtpCredentials">can_use_smtp_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_smtp_credentials IdentityUserCapabilitiesManagement#can_use_smtp_credentials}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#id IdentityUserCapabilitiesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts">IdentityUserCapabilitiesManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.userId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#user_id IdentityUserCapabilitiesManagement#user_id}.

---

##### `can_use_api_keys`<sup>Optional</sup> <a name="can_use_api_keys" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.canUseApiKeys"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_api_keys IdentityUserCapabilitiesManagement#can_use_api_keys}.

---

##### `can_use_auth_tokens`<sup>Optional</sup> <a name="can_use_auth_tokens" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.canUseAuthTokens"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_auth_tokens IdentityUserCapabilitiesManagement#can_use_auth_tokens}.

---

##### `can_use_console_password`<sup>Optional</sup> <a name="can_use_console_password" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.canUseConsolePassword"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_console_password IdentityUserCapabilitiesManagement#can_use_console_password}.

---

##### `can_use_customer_secret_keys`<sup>Optional</sup> <a name="can_use_customer_secret_keys" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.canUseCustomerSecretKeys"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_customer_secret_keys IdentityUserCapabilitiesManagement#can_use_customer_secret_keys}.

---

##### `can_use_smtp_credentials`<sup>Optional</sup> <a name="can_use_smtp_credentials" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.canUseSmtpCredentials"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_smtp_credentials IdentityUserCapabilitiesManagement#can_use_smtp_credentials}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#id IdentityUserCapabilitiesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts">IdentityUserCapabilitiesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#timeouts IdentityUserCapabilitiesManagement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseApiKeys">reset_can_use_api_keys</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseAuthTokens">reset_can_use_auth_tokens</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseConsolePassword">reset_can_use_console_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseCustomerSecretKeys">reset_can_use_customer_secret_keys</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseSmtpCredentials">reset_can_use_smtp_credentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#create IdentityUserCapabilitiesManagement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#delete IdentityUserCapabilitiesManagement#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#update IdentityUserCapabilitiesManagement#update}.

---

##### `reset_can_use_api_keys` <a name="reset_can_use_api_keys" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseApiKeys"></a>

```python
def reset_can_use_api_keys() -> None
```

##### `reset_can_use_auth_tokens` <a name="reset_can_use_auth_tokens" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseAuthTokens"></a>

```python
def reset_can_use_auth_tokens() -> None
```

##### `reset_can_use_console_password` <a name="reset_can_use_console_password" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseConsolePassword"></a>

```python
def reset_can_use_console_password() -> None
```

##### `reset_can_use_customer_secret_keys` <a name="reset_can_use_customer_secret_keys" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseCustomerSecretKeys"></a>

```python
def reset_can_use_customer_secret_keys() -> None
```

##### `reset_can_use_smtp_credentials` <a name="reset_can_use_smtp_credentials" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseSmtpCredentials"></a>

```python
def reset_can_use_smtp_credentials() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdentityUserCapabilitiesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_user_capabilities_management

identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_user_capabilities_management

identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_user_capabilities_management

identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_user_capabilities_management

identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdentityUserCapabilitiesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentityUserCapabilitiesManagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdentityUserCapabilitiesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityUserCapabilitiesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference">IdentityUserCapabilitiesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseApiKeysInput">can_use_api_keys_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseAuthTokensInput">can_use_auth_tokens_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseConsolePasswordInput">can_use_console_password_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseCustomerSecretKeysInput">can_use_customer_secret_keys_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseSmtpCredentialsInput">can_use_smtp_credentials_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts">IdentityUserCapabilitiesManagementTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseApiKeys">can_use_api_keys</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseAuthTokens">can_use_auth_tokens</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseConsolePassword">can_use_console_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseCustomerSecretKeys">can_use_customer_secret_keys</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseSmtpCredentials">can_use_smtp_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.userId">user_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.timeouts"></a>

```python
timeouts: IdentityUserCapabilitiesManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference">IdentityUserCapabilitiesManagementTimeoutsOutputReference</a>

---

##### `can_use_api_keys_input`<sup>Optional</sup> <a name="can_use_api_keys_input" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseApiKeysInput"></a>

```python
can_use_api_keys_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `can_use_auth_tokens_input`<sup>Optional</sup> <a name="can_use_auth_tokens_input" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseAuthTokensInput"></a>

```python
can_use_auth_tokens_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `can_use_console_password_input`<sup>Optional</sup> <a name="can_use_console_password_input" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseConsolePasswordInput"></a>

```python
can_use_console_password_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `can_use_customer_secret_keys_input`<sup>Optional</sup> <a name="can_use_customer_secret_keys_input" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseCustomerSecretKeysInput"></a>

```python
can_use_customer_secret_keys_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `can_use_smtp_credentials_input`<sup>Optional</sup> <a name="can_use_smtp_credentials_input" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseSmtpCredentialsInput"></a>

```python
can_use_smtp_credentials_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IdentityUserCapabilitiesManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts">IdentityUserCapabilitiesManagementTimeouts</a>]

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `can_use_api_keys`<sup>Required</sup> <a name="can_use_api_keys" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseApiKeys"></a>

```python
can_use_api_keys: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `can_use_auth_tokens`<sup>Required</sup> <a name="can_use_auth_tokens" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseAuthTokens"></a>

```python
can_use_auth_tokens: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `can_use_console_password`<sup>Required</sup> <a name="can_use_console_password" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseConsolePassword"></a>

```python
can_use_console_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `can_use_customer_secret_keys`<sup>Required</sup> <a name="can_use_customer_secret_keys" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseCustomerSecretKeys"></a>

```python
can_use_customer_secret_keys: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `can_use_smtp_credentials`<sup>Required</sup> <a name="can_use_smtp_credentials" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseSmtpCredentials"></a>

```python
can_use_smtp_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityUserCapabilitiesManagementConfig <a name="IdentityUserCapabilitiesManagementConfig" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_user_capabilities_management

identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  user_id: str,
  can_use_api_keys: typing.Union[bool, IResolvable] = None,
  can_use_auth_tokens: typing.Union[bool, IResolvable] = None,
  can_use_console_password: typing.Union[bool, IResolvable] = None,
  can_use_customer_secret_keys: typing.Union[bool, IResolvable] = None,
  can_use_smtp_credentials: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: IdentityUserCapabilitiesManagementTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#user_id IdentityUserCapabilitiesManagement#user_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseApiKeys">can_use_api_keys</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_api_keys IdentityUserCapabilitiesManagement#can_use_api_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseAuthTokens">can_use_auth_tokens</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_auth_tokens IdentityUserCapabilitiesManagement#can_use_auth_tokens}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseConsolePassword">can_use_console_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_console_password IdentityUserCapabilitiesManagement#can_use_console_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseCustomerSecretKeys">can_use_customer_secret_keys</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_customer_secret_keys IdentityUserCapabilitiesManagement#can_use_customer_secret_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseSmtpCredentials">can_use_smtp_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_smtp_credentials IdentityUserCapabilitiesManagement#can_use_smtp_credentials}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#id IdentityUserCapabilitiesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts">IdentityUserCapabilitiesManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.userId"></a>

```python
user_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#user_id IdentityUserCapabilitiesManagement#user_id}.

---

##### `can_use_api_keys`<sup>Optional</sup> <a name="can_use_api_keys" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseApiKeys"></a>

```python
can_use_api_keys: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_api_keys IdentityUserCapabilitiesManagement#can_use_api_keys}.

---

##### `can_use_auth_tokens`<sup>Optional</sup> <a name="can_use_auth_tokens" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseAuthTokens"></a>

```python
can_use_auth_tokens: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_auth_tokens IdentityUserCapabilitiesManagement#can_use_auth_tokens}.

---

##### `can_use_console_password`<sup>Optional</sup> <a name="can_use_console_password" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseConsolePassword"></a>

```python
can_use_console_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_console_password IdentityUserCapabilitiesManagement#can_use_console_password}.

---

##### `can_use_customer_secret_keys`<sup>Optional</sup> <a name="can_use_customer_secret_keys" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseCustomerSecretKeys"></a>

```python
can_use_customer_secret_keys: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_customer_secret_keys IdentityUserCapabilitiesManagement#can_use_customer_secret_keys}.

---

##### `can_use_smtp_credentials`<sup>Optional</sup> <a name="can_use_smtp_credentials" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseSmtpCredentials"></a>

```python
can_use_smtp_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_smtp_credentials IdentityUserCapabilitiesManagement#can_use_smtp_credentials}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#id IdentityUserCapabilitiesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.timeouts"></a>

```python
timeouts: IdentityUserCapabilitiesManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts">IdentityUserCapabilitiesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#timeouts IdentityUserCapabilitiesManagement#timeouts}

---

### IdentityUserCapabilitiesManagementTimeouts <a name="IdentityUserCapabilitiesManagementTimeouts" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_user_capabilities_management

identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#create IdentityUserCapabilitiesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#delete IdentityUserCapabilitiesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#update IdentityUserCapabilitiesManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#create IdentityUserCapabilitiesManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#delete IdentityUserCapabilitiesManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#update IdentityUserCapabilitiesManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityUserCapabilitiesManagementTimeoutsOutputReference <a name="IdentityUserCapabilitiesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_user_capabilities_management

identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts">IdentityUserCapabilitiesManagementTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityUserCapabilitiesManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts">IdentityUserCapabilitiesManagementTimeouts</a>]

---



