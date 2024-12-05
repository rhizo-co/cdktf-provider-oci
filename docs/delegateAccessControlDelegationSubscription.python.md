# `delegateAccessControlDelegationSubscription` Submodule <a name="`delegateAccessControlDelegationSubscription` Submodule" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DelegateAccessControlDelegationSubscription <a name="DelegateAccessControlDelegationSubscription" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription oci_delegate_access_control_delegation_subscription}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import delegate_access_control_delegation_subscription

delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription(
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
  service_provider_id: str,
  subscribed_service_type: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: DelegateAccessControlDelegationSubscriptionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#compartment_id DelegateAccessControlDelegationSubscription#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.serviceProviderId">service_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#service_provider_id DelegateAccessControlDelegationSubscription#service_provider_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.subscribedServiceType">subscribed_service_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#subscribed_service_type DelegateAccessControlDelegationSubscription#subscribed_service_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#defined_tags DelegateAccessControlDelegationSubscription#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#description DelegateAccessControlDelegationSubscription#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#freeform_tags DelegateAccessControlDelegationSubscription#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#id DelegateAccessControlDelegationSubscription#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts">DelegateAccessControlDelegationSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#compartment_id DelegateAccessControlDelegationSubscription#compartment_id}.

---

##### `service_provider_id`<sup>Required</sup> <a name="service_provider_id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.serviceProviderId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#service_provider_id DelegateAccessControlDelegationSubscription#service_provider_id}.

---

##### `subscribed_service_type`<sup>Required</sup> <a name="subscribed_service_type" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.subscribedServiceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#subscribed_service_type DelegateAccessControlDelegationSubscription#subscribed_service_type}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#defined_tags DelegateAccessControlDelegationSubscription#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#description DelegateAccessControlDelegationSubscription#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#freeform_tags DelegateAccessControlDelegationSubscription#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#id DelegateAccessControlDelegationSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts">DelegateAccessControlDelegationSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#timeouts DelegateAccessControlDelegationSubscription#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#create DelegateAccessControlDelegationSubscription#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#delete DelegateAccessControlDelegationSubscription#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#update DelegateAccessControlDelegationSubscription#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DelegateAccessControlDelegationSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import delegate_access_control_delegation_subscription

delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import delegate_access_control_delegation_subscription

delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import delegate_access_control_delegation_subscription

delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import delegate_access_control_delegation_subscription

delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DelegateAccessControlDelegationSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DelegateAccessControlDelegationSubscription to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DelegateAccessControlDelegationSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DelegateAccessControlDelegationSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.lifecycleStateDetails">lifecycle_state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference">DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.serviceProviderIdInput">service_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.subscribedServiceTypeInput">subscribed_service_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts">DelegateAccessControlDelegationSubscriptionTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.serviceProviderId">service_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.subscribedServiceType">subscribed_service_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `lifecycle_state_details`<sup>Required</sup> <a name="lifecycle_state_details" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.lifecycleStateDetails"></a>

```python
lifecycle_state_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.timeouts"></a>

```python
timeouts: DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference">DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `service_provider_id_input`<sup>Optional</sup> <a name="service_provider_id_input" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.serviceProviderIdInput"></a>

```python
service_provider_id_input: str
```

- *Type:* str

---

##### `subscribed_service_type_input`<sup>Optional</sup> <a name="subscribed_service_type_input" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.subscribedServiceTypeInput"></a>

```python
subscribed_service_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DelegateAccessControlDelegationSubscriptionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts">DelegateAccessControlDelegationSubscriptionTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service_provider_id`<sup>Required</sup> <a name="service_provider_id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.serviceProviderId"></a>

```python
service_provider_id: str
```

- *Type:* str

---

##### `subscribed_service_type`<sup>Required</sup> <a name="subscribed_service_type" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.subscribedServiceType"></a>

```python
subscribed_service_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DelegateAccessControlDelegationSubscriptionConfig <a name="DelegateAccessControlDelegationSubscriptionConfig" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import delegate_access_control_delegation_subscription

delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  service_provider_id: str,
  subscribed_service_type: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: DelegateAccessControlDelegationSubscriptionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#compartment_id DelegateAccessControlDelegationSubscription#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.serviceProviderId">service_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#service_provider_id DelegateAccessControlDelegationSubscription#service_provider_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.subscribedServiceType">subscribed_service_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#subscribed_service_type DelegateAccessControlDelegationSubscription#subscribed_service_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#defined_tags DelegateAccessControlDelegationSubscription#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#description DelegateAccessControlDelegationSubscription#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#freeform_tags DelegateAccessControlDelegationSubscription#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#id DelegateAccessControlDelegationSubscription#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts">DelegateAccessControlDelegationSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#compartment_id DelegateAccessControlDelegationSubscription#compartment_id}.

---

##### `service_provider_id`<sup>Required</sup> <a name="service_provider_id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.serviceProviderId"></a>

```python
service_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#service_provider_id DelegateAccessControlDelegationSubscription#service_provider_id}.

---

##### `subscribed_service_type`<sup>Required</sup> <a name="subscribed_service_type" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.subscribedServiceType"></a>

```python
subscribed_service_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#subscribed_service_type DelegateAccessControlDelegationSubscription#subscribed_service_type}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#defined_tags DelegateAccessControlDelegationSubscription#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#description DelegateAccessControlDelegationSubscription#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#freeform_tags DelegateAccessControlDelegationSubscription#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#id DelegateAccessControlDelegationSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.timeouts"></a>

```python
timeouts: DelegateAccessControlDelegationSubscriptionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts">DelegateAccessControlDelegationSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#timeouts DelegateAccessControlDelegationSubscription#timeouts}

---

### DelegateAccessControlDelegationSubscriptionTimeouts <a name="DelegateAccessControlDelegationSubscriptionTimeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import delegate_access_control_delegation_subscription

delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#create DelegateAccessControlDelegationSubscription#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#delete DelegateAccessControlDelegationSubscription#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#update DelegateAccessControlDelegationSubscription#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#create DelegateAccessControlDelegationSubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#delete DelegateAccessControlDelegationSubscription#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#update DelegateAccessControlDelegationSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference <a name="DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import delegate_access_control_delegation_subscription

delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts">DelegateAccessControlDelegationSubscriptionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DelegateAccessControlDelegationSubscriptionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts">DelegateAccessControlDelegationSubscriptionTimeouts</a>]

---



