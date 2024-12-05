# `ospGatewaySubscription` Submodule <a name="`ospGatewaySubscription` Submodule" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OspGatewaySubscription <a name="OspGatewaySubscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription oci_osp_gateway_subscription}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscription(
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
  email: str,
  osp_home_region: str,
  subscription: OspGatewaySubscriptionSubscription,
  subscription_id: str,
  id: str = None,
  timeouts: OspGatewaySubscriptionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#compartment_id OspGatewaySubscription#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email OspGatewaySubscription#email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.ospHomeRegion">osp_home_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#osp_home_region OspGatewaySubscription#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.subscription">subscription</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a></code> | subscription block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription_id OspGatewaySubscription#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#id OspGatewaySubscription#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#compartment_id OspGatewaySubscription#compartment_id}.

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.email"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email OspGatewaySubscription#email}.

---

##### `osp_home_region`<sup>Required</sup> <a name="osp_home_region" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.ospHomeRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#osp_home_region OspGatewaySubscription#osp_home_region}.

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.subscription"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a>

subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription OspGatewaySubscription#subscription}

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription_id OspGatewaySubscription#subscription_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#id OspGatewaySubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#timeouts OspGatewaySubscription#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription">put_subscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_subscription` <a name="put_subscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription"></a>

```python
def put_subscription(
  subscription_plan_number: str,
  account_type: str = None,
  billing_address: typing.Union[IResolvable, typing.List[OspGatewaySubscriptionSubscriptionBillingAddress]] = None,
  bill_to_cust_account_id: str = None,
  currency_code: str = None,
  gsi_org_code: str = None,
  id: str = None,
  is_intent_to_pay: typing.Union[bool, IResolvable] = None,
  language_code: str = None,
  organization_id: str = None,
  payment_gateway: OspGatewaySubscriptionSubscriptionPaymentGateway = None,
  payment_options: typing.Union[IResolvable, typing.List[OspGatewaySubscriptionSubscriptionPaymentOptions]] = None,
  plan_type: str = None,
  ship_to_cust_acct_role_id: str = None,
  ship_to_cust_acct_site_id: str = None,
  tax_info: OspGatewaySubscriptionSubscriptionTaxInfo = None,
  time_personal_to_corporate_conv: str = None,
  time_plan_upgrade: str = None,
  time_start: str = None,
  upgrade_state: str = None,
  upgrade_state_details: str = None
) -> None
```

###### `subscription_plan_number`<sup>Required</sup> <a name="subscription_plan_number" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription.parameter.subscriptionPlanNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription_plan_number OspGatewaySubscription#subscription_plan_number}.

---

###### `account_type`<sup>Optional</sup> <a name="account_type" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription.parameter.accountType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#account_type OspGatewaySubscription#account_type}.

---

###### `billing_address`<sup>Optional</sup> <a name="billing_address" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription.parameter.billingAddress"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress">OspGatewaySubscriptionSubscriptionBillingAddress</a>]]

billing_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#billing_address OspGatewaySubscription#billing_address}

---

###### `bill_to_cust_account_id`<sup>Optional</sup> <a name="bill_to_cust_account_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription.parameter.billToCustAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#bill_to_cust_account_id OspGatewaySubscription#bill_to_cust_account_id}.

---

###### `currency_code`<sup>Optional</sup> <a name="currency_code" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription.parameter.currencyCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#currency_code OspGatewaySubscription#currency_code}.

---

###### `gsi_org_code`<sup>Optional</sup> <a name="gsi_org_code" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription.parameter.gsiOrgCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#gsi_org_code OspGatewaySubscription#gsi_org_code}.

---

###### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#id OspGatewaySubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `is_intent_to_pay`<sup>Optional</sup> <a name="is_intent_to_pay" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription.parameter.isIntentToPay"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#is_intent_to_pay OspGatewaySubscription#is_intent_to_pay}.

---

###### `language_code`<sup>Optional</sup> <a name="language_code" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription.parameter.languageCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#language_code OspGatewaySubscription#language_code}.

---

###### `organization_id`<sup>Optional</sup> <a name="organization_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription.parameter.organizationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#organization_id OspGatewaySubscription#organization_id}.

---

###### `payment_gateway`<sup>Optional</sup> <a name="payment_gateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription.parameter.paymentGateway"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a>

payment_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#payment_gateway OspGatewaySubscription#payment_gateway}

---

###### `payment_options`<sup>Optional</sup> <a name="payment_options" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription.parameter.paymentOptions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions">OspGatewaySubscriptionSubscriptionPaymentOptions</a>]]

payment_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#payment_options OspGatewaySubscription#payment_options}

---

###### `plan_type`<sup>Optional</sup> <a name="plan_type" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription.parameter.planType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#plan_type OspGatewaySubscription#plan_type}.

---

###### `ship_to_cust_acct_role_id`<sup>Optional</sup> <a name="ship_to_cust_acct_role_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription.parameter.shipToCustAcctRoleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ship_to_cust_acct_role_id OspGatewaySubscription#ship_to_cust_acct_role_id}.

---

###### `ship_to_cust_acct_site_id`<sup>Optional</sup> <a name="ship_to_cust_acct_site_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription.parameter.shipToCustAcctSiteId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ship_to_cust_acct_site_id OspGatewaySubscription#ship_to_cust_acct_site_id}.

---

###### `tax_info`<sup>Optional</sup> <a name="tax_info" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription.parameter.taxInfo"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a>

tax_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_info OspGatewaySubscription#tax_info}

---

###### `time_personal_to_corporate_conv`<sup>Optional</sup> <a name="time_personal_to_corporate_conv" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription.parameter.timePersonalToCorporateConv"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_personal_to_corporate_conv OspGatewaySubscription#time_personal_to_corporate_conv}.

---

###### `time_plan_upgrade`<sup>Optional</sup> <a name="time_plan_upgrade" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription.parameter.timePlanUpgrade"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_plan_upgrade OspGatewaySubscription#time_plan_upgrade}.

---

###### `time_start`<sup>Optional</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription.parameter.timeStart"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_start OspGatewaySubscription#time_start}.

---

###### `upgrade_state`<sup>Optional</sup> <a name="upgrade_state" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription.parameter.upgradeState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#upgrade_state OspGatewaySubscription#upgrade_state}.

---

###### `upgrade_state_details`<sup>Optional</sup> <a name="upgrade_state_details" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription.parameter.upgradeStateDetails"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#upgrade_state_details OspGatewaySubscription#upgrade_state_details}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#create OspGatewaySubscription#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#delete OspGatewaySubscription#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#update OspGatewaySubscription#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OspGatewaySubscription resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscription.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscription.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscription.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscription.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OspGatewaySubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OspGatewaySubscription to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OspGatewaySubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OspGatewaySubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.accountType">account_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.billingAddress">billing_address</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList">OspGatewaySubscriptionBillingAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.billToCustAccountId">bill_to_cust_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.currencyCode">currency_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.gsiOrgCode">gsi_org_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.isIntentToPay">is_intent_to_pay</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.paymentGateway">payment_gateway</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList">OspGatewaySubscriptionPaymentGatewayList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.paymentOptions">payment_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList">OspGatewaySubscriptionPaymentOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.planType">plan_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.shipToCustAcctRoleId">ship_to_cust_acct_role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.shipToCustAcctSiteId">ship_to_cust_acct_site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscription">subscription</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference">OspGatewaySubscriptionSubscriptionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionPlanNumber">subscription_plan_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.taxInfo">tax_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList">OspGatewaySubscriptionTaxInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference">OspGatewaySubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timePersonalToCorporateConv">time_personal_to_corporate_conv</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timePlanUpgrade">time_plan_upgrade</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.upgradeState">upgrade_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.upgradeStateDetails">upgrade_state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.ospHomeRegionInput">osp_home_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionInput">subscription_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.ospHomeRegion">osp_home_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_type`<sup>Required</sup> <a name="account_type" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.accountType"></a>

```python
account_type: str
```

- *Type:* str

---

##### `billing_address`<sup>Required</sup> <a name="billing_address" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.billingAddress"></a>

```python
billing_address: OspGatewaySubscriptionBillingAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList">OspGatewaySubscriptionBillingAddressList</a>

---

##### `bill_to_cust_account_id`<sup>Required</sup> <a name="bill_to_cust_account_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.billToCustAccountId"></a>

```python
bill_to_cust_account_id: str
```

- *Type:* str

---

##### `currency_code`<sup>Required</sup> <a name="currency_code" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.currencyCode"></a>

```python
currency_code: str
```

- *Type:* str

---

##### `gsi_org_code`<sup>Required</sup> <a name="gsi_org_code" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.gsiOrgCode"></a>

```python
gsi_org_code: str
```

- *Type:* str

---

##### `is_intent_to_pay`<sup>Required</sup> <a name="is_intent_to_pay" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.isIntentToPay"></a>

```python
is_intent_to_pay: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `payment_gateway`<sup>Required</sup> <a name="payment_gateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.paymentGateway"></a>

```python
payment_gateway: OspGatewaySubscriptionPaymentGatewayList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList">OspGatewaySubscriptionPaymentGatewayList</a>

---

##### `payment_options`<sup>Required</sup> <a name="payment_options" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.paymentOptions"></a>

```python
payment_options: OspGatewaySubscriptionPaymentOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList">OspGatewaySubscriptionPaymentOptionsList</a>

---

##### `plan_type`<sup>Required</sup> <a name="plan_type" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.planType"></a>

```python
plan_type: str
```

- *Type:* str

---

##### `ship_to_cust_acct_role_id`<sup>Required</sup> <a name="ship_to_cust_acct_role_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.shipToCustAcctRoleId"></a>

```python
ship_to_cust_acct_role_id: str
```

- *Type:* str

---

##### `ship_to_cust_acct_site_id`<sup>Required</sup> <a name="ship_to_cust_acct_site_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.shipToCustAcctSiteId"></a>

```python
ship_to_cust_acct_site_id: str
```

- *Type:* str

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscription"></a>

```python
subscription: OspGatewaySubscriptionSubscriptionOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference">OspGatewaySubscriptionSubscriptionOutputReference</a>

---

##### `subscription_plan_number`<sup>Required</sup> <a name="subscription_plan_number" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionPlanNumber"></a>

```python
subscription_plan_number: str
```

- *Type:* str

---

##### `tax_info`<sup>Required</sup> <a name="tax_info" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.taxInfo"></a>

```python
tax_info: OspGatewaySubscriptionTaxInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList">OspGatewaySubscriptionTaxInfoList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeouts"></a>

```python
timeouts: OspGatewaySubscriptionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference">OspGatewaySubscriptionTimeoutsOutputReference</a>

---

##### `time_personal_to_corporate_conv`<sup>Required</sup> <a name="time_personal_to_corporate_conv" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timePersonalToCorporateConv"></a>

```python
time_personal_to_corporate_conv: str
```

- *Type:* str

---

##### `time_plan_upgrade`<sup>Required</sup> <a name="time_plan_upgrade" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timePlanUpgrade"></a>

```python
time_plan_upgrade: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `upgrade_state`<sup>Required</sup> <a name="upgrade_state" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.upgradeState"></a>

```python
upgrade_state: str
```

- *Type:* str

---

##### `upgrade_state_details`<sup>Required</sup> <a name="upgrade_state_details" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.upgradeStateDetails"></a>

```python
upgrade_state_details: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `osp_home_region_input`<sup>Optional</sup> <a name="osp_home_region_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.ospHomeRegionInput"></a>

```python
osp_home_region_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `subscription_input`<sup>Optional</sup> <a name="subscription_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionInput"></a>

```python
subscription_input: OspGatewaySubscriptionSubscription
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OspGatewaySubscriptionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `osp_home_region`<sup>Required</sup> <a name="osp_home_region" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.ospHomeRegion"></a>

```python
osp_home_region: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OspGatewaySubscriptionBillingAddress <a name="OspGatewaySubscriptionBillingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddress.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionBillingAddress()
```


### OspGatewaySubscriptionConfig <a name="OspGatewaySubscriptionConfig" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  email: str,
  osp_home_region: str,
  subscription: OspGatewaySubscriptionSubscription,
  subscription_id: str,
  id: str = None,
  timeouts: OspGatewaySubscriptionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#compartment_id OspGatewaySubscription#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email OspGatewaySubscription#email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.ospHomeRegion">osp_home_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#osp_home_region OspGatewaySubscription#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.subscription">subscription</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a></code> | subscription block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription_id OspGatewaySubscription#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#id OspGatewaySubscription#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#compartment_id OspGatewaySubscription#compartment_id}.

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email OspGatewaySubscription#email}.

---

##### `osp_home_region`<sup>Required</sup> <a name="osp_home_region" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.ospHomeRegion"></a>

```python
osp_home_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#osp_home_region OspGatewaySubscription#osp_home_region}.

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.subscription"></a>

```python
subscription: OspGatewaySubscriptionSubscription
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a>

subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription OspGatewaySubscription#subscription}

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription_id OspGatewaySubscription#subscription_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#id OspGatewaySubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.timeouts"></a>

```python
timeouts: OspGatewaySubscriptionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#timeouts OspGatewaySubscription#timeouts}

---

### OspGatewaySubscriptionPaymentGateway <a name="OspGatewaySubscriptionPaymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGateway"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGateway.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionPaymentGateway()
```


### OspGatewaySubscriptionPaymentGatewayMerchantDefinedData <a name="OspGatewaySubscriptionPaymentGatewayMerchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedData.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedData()
```


### OspGatewaySubscriptionPaymentOptions <a name="OspGatewaySubscriptionPaymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionPaymentOptions()
```


### OspGatewaySubscriptionSubscription <a name="OspGatewaySubscriptionSubscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionSubscription(
  subscription_plan_number: str,
  account_type: str = None,
  billing_address: typing.Union[IResolvable, typing.List[OspGatewaySubscriptionSubscriptionBillingAddress]] = None,
  bill_to_cust_account_id: str = None,
  currency_code: str = None,
  gsi_org_code: str = None,
  id: str = None,
  is_intent_to_pay: typing.Union[bool, IResolvable] = None,
  language_code: str = None,
  organization_id: str = None,
  payment_gateway: OspGatewaySubscriptionSubscriptionPaymentGateway = None,
  payment_options: typing.Union[IResolvable, typing.List[OspGatewaySubscriptionSubscriptionPaymentOptions]] = None,
  plan_type: str = None,
  ship_to_cust_acct_role_id: str = None,
  ship_to_cust_acct_site_id: str = None,
  tax_info: OspGatewaySubscriptionSubscriptionTaxInfo = None,
  time_personal_to_corporate_conv: str = None,
  time_plan_upgrade: str = None,
  time_start: str = None,
  upgrade_state: str = None,
  upgrade_state_details: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.subscriptionPlanNumber">subscription_plan_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription_plan_number OspGatewaySubscription#subscription_plan_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.accountType">account_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#account_type OspGatewaySubscription#account_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.billingAddress">billing_address</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress">OspGatewaySubscriptionSubscriptionBillingAddress</a>]]</code> | billing_address block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.billToCustAccountId">bill_to_cust_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#bill_to_cust_account_id OspGatewaySubscription#bill_to_cust_account_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.currencyCode">currency_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#currency_code OspGatewaySubscription#currency_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.gsiOrgCode">gsi_org_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#gsi_org_code OspGatewaySubscription#gsi_org_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#id OspGatewaySubscription#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.isIntentToPay">is_intent_to_pay</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#is_intent_to_pay OspGatewaySubscription#is_intent_to_pay}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.languageCode">language_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#language_code OspGatewaySubscription#language_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.organizationId">organization_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#organization_id OspGatewaySubscription#organization_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.paymentGateway">payment_gateway</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a></code> | payment_gateway block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.paymentOptions">payment_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions">OspGatewaySubscriptionSubscriptionPaymentOptions</a>]]</code> | payment_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.planType">plan_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#plan_type OspGatewaySubscription#plan_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.shipToCustAcctRoleId">ship_to_cust_acct_role_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ship_to_cust_acct_role_id OspGatewaySubscription#ship_to_cust_acct_role_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.shipToCustAcctSiteId">ship_to_cust_acct_site_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ship_to_cust_acct_site_id OspGatewaySubscription#ship_to_cust_acct_site_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.taxInfo">tax_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a></code> | tax_info block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timePersonalToCorporateConv">time_personal_to_corporate_conv</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_personal_to_corporate_conv OspGatewaySubscription#time_personal_to_corporate_conv}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timePlanUpgrade">time_plan_upgrade</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_plan_upgrade OspGatewaySubscription#time_plan_upgrade}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timeStart">time_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_start OspGatewaySubscription#time_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.upgradeState">upgrade_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#upgrade_state OspGatewaySubscription#upgrade_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.upgradeStateDetails">upgrade_state_details</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#upgrade_state_details OspGatewaySubscription#upgrade_state_details}. |

---

##### `subscription_plan_number`<sup>Required</sup> <a name="subscription_plan_number" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.subscriptionPlanNumber"></a>

```python
subscription_plan_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription_plan_number OspGatewaySubscription#subscription_plan_number}.

---

##### `account_type`<sup>Optional</sup> <a name="account_type" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.accountType"></a>

```python
account_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#account_type OspGatewaySubscription#account_type}.

---

##### `billing_address`<sup>Optional</sup> <a name="billing_address" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.billingAddress"></a>

```python
billing_address: typing.Union[IResolvable, typing.List[OspGatewaySubscriptionSubscriptionBillingAddress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress">OspGatewaySubscriptionSubscriptionBillingAddress</a>]]

billing_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#billing_address OspGatewaySubscription#billing_address}

---

##### `bill_to_cust_account_id`<sup>Optional</sup> <a name="bill_to_cust_account_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.billToCustAccountId"></a>

```python
bill_to_cust_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#bill_to_cust_account_id OspGatewaySubscription#bill_to_cust_account_id}.

---

##### `currency_code`<sup>Optional</sup> <a name="currency_code" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.currencyCode"></a>

```python
currency_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#currency_code OspGatewaySubscription#currency_code}.

---

##### `gsi_org_code`<sup>Optional</sup> <a name="gsi_org_code" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.gsiOrgCode"></a>

```python
gsi_org_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#gsi_org_code OspGatewaySubscription#gsi_org_code}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#id OspGatewaySubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_intent_to_pay`<sup>Optional</sup> <a name="is_intent_to_pay" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.isIntentToPay"></a>

```python
is_intent_to_pay: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#is_intent_to_pay OspGatewaySubscription#is_intent_to_pay}.

---

##### `language_code`<sup>Optional</sup> <a name="language_code" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#language_code OspGatewaySubscription#language_code}.

---

##### `organization_id`<sup>Optional</sup> <a name="organization_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#organization_id OspGatewaySubscription#organization_id}.

---

##### `payment_gateway`<sup>Optional</sup> <a name="payment_gateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.paymentGateway"></a>

```python
payment_gateway: OspGatewaySubscriptionSubscriptionPaymentGateway
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a>

payment_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#payment_gateway OspGatewaySubscription#payment_gateway}

---

##### `payment_options`<sup>Optional</sup> <a name="payment_options" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.paymentOptions"></a>

```python
payment_options: typing.Union[IResolvable, typing.List[OspGatewaySubscriptionSubscriptionPaymentOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions">OspGatewaySubscriptionSubscriptionPaymentOptions</a>]]

payment_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#payment_options OspGatewaySubscription#payment_options}

---

##### `plan_type`<sup>Optional</sup> <a name="plan_type" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.planType"></a>

```python
plan_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#plan_type OspGatewaySubscription#plan_type}.

---

##### `ship_to_cust_acct_role_id`<sup>Optional</sup> <a name="ship_to_cust_acct_role_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.shipToCustAcctRoleId"></a>

```python
ship_to_cust_acct_role_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ship_to_cust_acct_role_id OspGatewaySubscription#ship_to_cust_acct_role_id}.

---

##### `ship_to_cust_acct_site_id`<sup>Optional</sup> <a name="ship_to_cust_acct_site_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.shipToCustAcctSiteId"></a>

```python
ship_to_cust_acct_site_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ship_to_cust_acct_site_id OspGatewaySubscription#ship_to_cust_acct_site_id}.

---

##### `tax_info`<sup>Optional</sup> <a name="tax_info" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.taxInfo"></a>

```python
tax_info: OspGatewaySubscriptionSubscriptionTaxInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a>

tax_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_info OspGatewaySubscription#tax_info}

---

##### `time_personal_to_corporate_conv`<sup>Optional</sup> <a name="time_personal_to_corporate_conv" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timePersonalToCorporateConv"></a>

```python
time_personal_to_corporate_conv: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_personal_to_corporate_conv OspGatewaySubscription#time_personal_to_corporate_conv}.

---

##### `time_plan_upgrade`<sup>Optional</sup> <a name="time_plan_upgrade" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timePlanUpgrade"></a>

```python
time_plan_upgrade: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_plan_upgrade OspGatewaySubscription#time_plan_upgrade}.

---

##### `time_start`<sup>Optional</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_start OspGatewaySubscription#time_start}.

---

##### `upgrade_state`<sup>Optional</sup> <a name="upgrade_state" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.upgradeState"></a>

```python
upgrade_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#upgrade_state OspGatewaySubscription#upgrade_state}.

---

##### `upgrade_state_details`<sup>Optional</sup> <a name="upgrade_state_details" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.upgradeStateDetails"></a>

```python
upgrade_state_details: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#upgrade_state_details OspGatewaySubscription#upgrade_state_details}.

---

### OspGatewaySubscriptionSubscriptionBillingAddress <a name="OspGatewaySubscriptionSubscriptionBillingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress(
  address_key: str = None,
  city: str = None,
  company_name: str = None,
  contributor_class: str = None,
  country: str = None,
  county: str = None,
  department_name: str = None,
  email_address: str = None,
  first_name: str = None,
  internal_number: str = None,
  job_title: str = None,
  last_name: str = None,
  line1: str = None,
  line2: str = None,
  line3: str = None,
  line4: str = None,
  middle_name: str = None,
  municipal_inscription: str = None,
  phone_country_code: str = None,
  phone_number: str = None,
  postal_code: str = None,
  province: str = None,
  state: str = None,
  state_inscription: str = None,
  street_name: str = None,
  street_number: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.addressKey">address_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#address_key OspGatewaySubscription#address_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.city">city</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#city OspGatewaySubscription#city}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.companyName">company_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#company_name OspGatewaySubscription#company_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.contributorClass">contributor_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#contributor_class OspGatewaySubscription#contributor_class}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.country">country</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#country OspGatewaySubscription#country}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.county">county</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#county OspGatewaySubscription#county}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.departmentName">department_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#department_name OspGatewaySubscription#department_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.emailAddress">email_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email_address OspGatewaySubscription#email_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.firstName">first_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#first_name OspGatewaySubscription#first_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.internalNumber">internal_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#internal_number OspGatewaySubscription#internal_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.jobTitle">job_title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#job_title OspGatewaySubscription#job_title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.lastName">last_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_name OspGatewaySubscription#last_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line1">line1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line1 OspGatewaySubscription#line1}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line2">line2</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line2 OspGatewaySubscription#line2}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line3">line3</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line3 OspGatewaySubscription#line3}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line4">line4</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line4 OspGatewaySubscription#line4}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.middleName">middle_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#middle_name OspGatewaySubscription#middle_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.municipalInscription">municipal_inscription</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#municipal_inscription OspGatewaySubscription#municipal_inscription}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.phoneCountryCode">phone_country_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#phone_country_code OspGatewaySubscription#phone_country_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.phoneNumber">phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#phone_number OspGatewaySubscription#phone_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.postalCode">postal_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#postal_code OspGatewaySubscription#postal_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.province">province</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#province OspGatewaySubscription#province}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#state OspGatewaySubscription#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.stateInscription">state_inscription</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#state_inscription OspGatewaySubscription#state_inscription}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.streetName">street_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#street_name OspGatewaySubscription#street_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.streetNumber">street_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#street_number OspGatewaySubscription#street_number}. |

---

##### `address_key`<sup>Optional</sup> <a name="address_key" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.addressKey"></a>

```python
address_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#address_key OspGatewaySubscription#address_key}.

---

##### `city`<sup>Optional</sup> <a name="city" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.city"></a>

```python
city: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#city OspGatewaySubscription#city}.

---

##### `company_name`<sup>Optional</sup> <a name="company_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.companyName"></a>

```python
company_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#company_name OspGatewaySubscription#company_name}.

---

##### `contributor_class`<sup>Optional</sup> <a name="contributor_class" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.contributorClass"></a>

```python
contributor_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#contributor_class OspGatewaySubscription#contributor_class}.

---

##### `country`<sup>Optional</sup> <a name="country" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.country"></a>

```python
country: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#country OspGatewaySubscription#country}.

---

##### `county`<sup>Optional</sup> <a name="county" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.county"></a>

```python
county: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#county OspGatewaySubscription#county}.

---

##### `department_name`<sup>Optional</sup> <a name="department_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.departmentName"></a>

```python
department_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#department_name OspGatewaySubscription#department_name}.

---

##### `email_address`<sup>Optional</sup> <a name="email_address" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email_address OspGatewaySubscription#email_address}.

---

##### `first_name`<sup>Optional</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#first_name OspGatewaySubscription#first_name}.

---

##### `internal_number`<sup>Optional</sup> <a name="internal_number" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.internalNumber"></a>

```python
internal_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#internal_number OspGatewaySubscription#internal_number}.

---

##### `job_title`<sup>Optional</sup> <a name="job_title" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.jobTitle"></a>

```python
job_title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#job_title OspGatewaySubscription#job_title}.

---

##### `last_name`<sup>Optional</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_name OspGatewaySubscription#last_name}.

---

##### `line1`<sup>Optional</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line1"></a>

```python
line1: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line1 OspGatewaySubscription#line1}.

---

##### `line2`<sup>Optional</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line2"></a>

```python
line2: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line2 OspGatewaySubscription#line2}.

---

##### `line3`<sup>Optional</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line3"></a>

```python
line3: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line3 OspGatewaySubscription#line3}.

---

##### `line4`<sup>Optional</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line4"></a>

```python
line4: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line4 OspGatewaySubscription#line4}.

---

##### `middle_name`<sup>Optional</sup> <a name="middle_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.middleName"></a>

```python
middle_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#middle_name OspGatewaySubscription#middle_name}.

---

##### `municipal_inscription`<sup>Optional</sup> <a name="municipal_inscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.municipalInscription"></a>

```python
municipal_inscription: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#municipal_inscription OspGatewaySubscription#municipal_inscription}.

---

##### `phone_country_code`<sup>Optional</sup> <a name="phone_country_code" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.phoneCountryCode"></a>

```python
phone_country_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#phone_country_code OspGatewaySubscription#phone_country_code}.

---

##### `phone_number`<sup>Optional</sup> <a name="phone_number" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#phone_number OspGatewaySubscription#phone_number}.

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#postal_code OspGatewaySubscription#postal_code}.

---

##### `province`<sup>Optional</sup> <a name="province" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.province"></a>

```python
province: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#province OspGatewaySubscription#province}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#state OspGatewaySubscription#state}.

---

##### `state_inscription`<sup>Optional</sup> <a name="state_inscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.stateInscription"></a>

```python
state_inscription: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#state_inscription OspGatewaySubscription#state_inscription}.

---

##### `street_name`<sup>Optional</sup> <a name="street_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.streetName"></a>

```python
street_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#street_name OspGatewaySubscription#street_name}.

---

##### `street_number`<sup>Optional</sup> <a name="street_number" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.streetNumber"></a>

```python
street_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#street_number OspGatewaySubscription#street_number}.

---

### OspGatewaySubscriptionSubscriptionPaymentGateway <a name="OspGatewaySubscriptionSubscriptionPaymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway(
  merchant_defined_data: OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway.property.merchantDefinedData">merchant_defined_data</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a></code> | merchant_defined_data block. |

---

##### `merchant_defined_data`<sup>Optional</sup> <a name="merchant_defined_data" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway.property.merchantDefinedData"></a>

```python
merchant_defined_data: OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a>

merchant_defined_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#merchant_defined_data OspGatewaySubscription#merchant_defined_data}

---

### OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData <a name="OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData(
  cloud_account_name: str = None,
  promo_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData.property.cloudAccountName">cloud_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#cloud_account_name OspGatewaySubscription#cloud_account_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData.property.promoType">promo_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#promo_type OspGatewaySubscription#promo_type}. |

---

##### `cloud_account_name`<sup>Optional</sup> <a name="cloud_account_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData.property.cloudAccountName"></a>

```python
cloud_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#cloud_account_name OspGatewaySubscription#cloud_account_name}.

---

##### `promo_type`<sup>Optional</sup> <a name="promo_type" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData.property.promoType"></a>

```python
promo_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#promo_type OspGatewaySubscription#promo_type}.

---

### OspGatewaySubscriptionSubscriptionPaymentOptions <a name="OspGatewaySubscriptionSubscriptionPaymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions(
  payment_method: str,
  credit_card_type: str = None,
  email_address: str = None,
  ext_billing_agreement_id: str = None,
  first_name: str = None,
  last_digits: str = None,
  last_name: str = None,
  name_on_card: str = None,
  time_expiration: str = None,
  wallet_instrument_id: str = None,
  wallet_transaction_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.paymentMethod">payment_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#payment_method OspGatewaySubscription#payment_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.creditCardType">credit_card_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#credit_card_type OspGatewaySubscription#credit_card_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.emailAddress">email_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email_address OspGatewaySubscription#email_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.extBillingAgreementId">ext_billing_agreement_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ext_billing_agreement_id OspGatewaySubscription#ext_billing_agreement_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.firstName">first_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#first_name OspGatewaySubscription#first_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.lastDigits">last_digits</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_digits OspGatewaySubscription#last_digits}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.lastName">last_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_name OspGatewaySubscription#last_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.nameOnCard">name_on_card</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#name_on_card OspGatewaySubscription#name_on_card}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.timeExpiration">time_expiration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_expiration OspGatewaySubscription#time_expiration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.walletInstrumentId">wallet_instrument_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#wallet_instrument_id OspGatewaySubscription#wallet_instrument_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.walletTransactionId">wallet_transaction_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#wallet_transaction_id OspGatewaySubscription#wallet_transaction_id}. |

---

##### `payment_method`<sup>Required</sup> <a name="payment_method" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.paymentMethod"></a>

```python
payment_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#payment_method OspGatewaySubscription#payment_method}.

---

##### `credit_card_type`<sup>Optional</sup> <a name="credit_card_type" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.creditCardType"></a>

```python
credit_card_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#credit_card_type OspGatewaySubscription#credit_card_type}.

---

##### `email_address`<sup>Optional</sup> <a name="email_address" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email_address OspGatewaySubscription#email_address}.

---

##### `ext_billing_agreement_id`<sup>Optional</sup> <a name="ext_billing_agreement_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.extBillingAgreementId"></a>

```python
ext_billing_agreement_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ext_billing_agreement_id OspGatewaySubscription#ext_billing_agreement_id}.

---

##### `first_name`<sup>Optional</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#first_name OspGatewaySubscription#first_name}.

---

##### `last_digits`<sup>Optional</sup> <a name="last_digits" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.lastDigits"></a>

```python
last_digits: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_digits OspGatewaySubscription#last_digits}.

---

##### `last_name`<sup>Optional</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_name OspGatewaySubscription#last_name}.

---

##### `name_on_card`<sup>Optional</sup> <a name="name_on_card" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.nameOnCard"></a>

```python
name_on_card: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#name_on_card OspGatewaySubscription#name_on_card}.

---

##### `time_expiration`<sup>Optional</sup> <a name="time_expiration" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.timeExpiration"></a>

```python
time_expiration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_expiration OspGatewaySubscription#time_expiration}.

---

##### `wallet_instrument_id`<sup>Optional</sup> <a name="wallet_instrument_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.walletInstrumentId"></a>

```python
wallet_instrument_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#wallet_instrument_id OspGatewaySubscription#wallet_instrument_id}.

---

##### `wallet_transaction_id`<sup>Optional</sup> <a name="wallet_transaction_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.walletTransactionId"></a>

```python
wallet_transaction_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#wallet_transaction_id OspGatewaySubscription#wallet_transaction_id}.

---

### OspGatewaySubscriptionSubscriptionTaxInfo <a name="OspGatewaySubscriptionSubscriptionTaxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo(
  no_tax_reason_code: str = None,
  no_tax_reason_code_details: str = None,
  tax_cnpj: str = None,
  tax_payer_id: str = None,
  tax_reg_number: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.noTaxReasonCode">no_tax_reason_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#no_tax_reason_code OspGatewaySubscription#no_tax_reason_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.noTaxReasonCodeDetails">no_tax_reason_code_details</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#no_tax_reason_code_details OspGatewaySubscription#no_tax_reason_code_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxCnpj">tax_cnpj</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_cnpj OspGatewaySubscription#tax_cnpj}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxPayerId">tax_payer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_payer_id OspGatewaySubscription#tax_payer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxRegNumber">tax_reg_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_reg_number OspGatewaySubscription#tax_reg_number}. |

---

##### `no_tax_reason_code`<sup>Optional</sup> <a name="no_tax_reason_code" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.noTaxReasonCode"></a>

```python
no_tax_reason_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#no_tax_reason_code OspGatewaySubscription#no_tax_reason_code}.

---

##### `no_tax_reason_code_details`<sup>Optional</sup> <a name="no_tax_reason_code_details" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.noTaxReasonCodeDetails"></a>

```python
no_tax_reason_code_details: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#no_tax_reason_code_details OspGatewaySubscription#no_tax_reason_code_details}.

---

##### `tax_cnpj`<sup>Optional</sup> <a name="tax_cnpj" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxCnpj"></a>

```python
tax_cnpj: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_cnpj OspGatewaySubscription#tax_cnpj}.

---

##### `tax_payer_id`<sup>Optional</sup> <a name="tax_payer_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxPayerId"></a>

```python
tax_payer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_payer_id OspGatewaySubscription#tax_payer_id}.

---

##### `tax_reg_number`<sup>Optional</sup> <a name="tax_reg_number" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxRegNumber"></a>

```python
tax_reg_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_reg_number OspGatewaySubscription#tax_reg_number}.

---

### OspGatewaySubscriptionTaxInfo <a name="OspGatewaySubscriptionTaxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionTaxInfo()
```


### OspGatewaySubscriptionTimeouts <a name="OspGatewaySubscriptionTimeouts" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#create OspGatewaySubscription#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#delete OspGatewaySubscription#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#update OspGatewaySubscription#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#create OspGatewaySubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#delete OspGatewaySubscription#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#update OspGatewaySubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OspGatewaySubscriptionBillingAddressList <a name="OspGatewaySubscriptionBillingAddressList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OspGatewaySubscriptionBillingAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OspGatewaySubscriptionBillingAddressOutputReference <a name="OspGatewaySubscriptionBillingAddressOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.addressKey">address_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.companyName">company_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.contributorClass">contributor_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.county">county</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.departmentName">department_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.internalNumber">internal_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.jobTitle">job_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line1">line1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line2">line2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line3">line3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line4">line4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.middleName">middle_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.municipalInscription">municipal_inscription</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.phoneCountryCode">phone_country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.province">province</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.stateInscription">state_inscription</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.streetName">street_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.streetNumber">street_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddress">OspGatewaySubscriptionBillingAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_key`<sup>Required</sup> <a name="address_key" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.addressKey"></a>

```python
address_key: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `company_name`<sup>Required</sup> <a name="company_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.companyName"></a>

```python
company_name: str
```

- *Type:* str

---

##### `contributor_class`<sup>Required</sup> <a name="contributor_class" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.contributorClass"></a>

```python
contributor_class: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `county`<sup>Required</sup> <a name="county" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.county"></a>

```python
county: str
```

- *Type:* str

---

##### `department_name`<sup>Required</sup> <a name="department_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.departmentName"></a>

```python
department_name: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `internal_number`<sup>Required</sup> <a name="internal_number" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.internalNumber"></a>

```python
internal_number: str
```

- *Type:* str

---

##### `job_title`<sup>Required</sup> <a name="job_title" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.jobTitle"></a>

```python
job_title: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `line1`<sup>Required</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line1"></a>

```python
line1: str
```

- *Type:* str

---

##### `line2`<sup>Required</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line2"></a>

```python
line2: str
```

- *Type:* str

---

##### `line3`<sup>Required</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line3"></a>

```python
line3: str
```

- *Type:* str

---

##### `line4`<sup>Required</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line4"></a>

```python
line4: str
```

- *Type:* str

---

##### `middle_name`<sup>Required</sup> <a name="middle_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.middleName"></a>

```python
middle_name: str
```

- *Type:* str

---

##### `municipal_inscription`<sup>Required</sup> <a name="municipal_inscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.municipalInscription"></a>

```python
municipal_inscription: str
```

- *Type:* str

---

##### `phone_country_code`<sup>Required</sup> <a name="phone_country_code" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.phoneCountryCode"></a>

```python
phone_country_code: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `province`<sup>Required</sup> <a name="province" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.province"></a>

```python
province: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_inscription`<sup>Required</sup> <a name="state_inscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.stateInscription"></a>

```python
state_inscription: str
```

- *Type:* str

---

##### `street_name`<sup>Required</sup> <a name="street_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.streetName"></a>

```python
street_name: str
```

- *Type:* str

---

##### `street_number`<sup>Required</sup> <a name="street_number" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.streetNumber"></a>

```python
street_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.internalValue"></a>

```python
internal_value: OspGatewaySubscriptionBillingAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddress">OspGatewaySubscriptionBillingAddress</a>

---


### OspGatewaySubscriptionPaymentGatewayList <a name="OspGatewaySubscriptionPaymentGatewayList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OspGatewaySubscriptionPaymentGatewayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList <a name="OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference <a name="OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName">cloud_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType">promo_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionPaymentGatewayMerchantDefinedData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_account_name`<sup>Required</sup> <a name="cloud_account_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName"></a>

```python
cloud_account_name: str
```

- *Type:* str

---

##### `promo_type`<sup>Required</sup> <a name="promo_type" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType"></a>

```python
promo_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue"></a>

```python
internal_value: OspGatewaySubscriptionPaymentGatewayMerchantDefinedData
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionPaymentGatewayMerchantDefinedData</a>

---


### OspGatewaySubscriptionPaymentGatewayOutputReference <a name="OspGatewaySubscriptionPaymentGatewayOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.merchantDefinedData">merchant_defined_data</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList">OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGateway">OspGatewaySubscriptionPaymentGateway</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `merchant_defined_data`<sup>Required</sup> <a name="merchant_defined_data" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.merchantDefinedData"></a>

```python
merchant_defined_data: OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList">OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.internalValue"></a>

```python
internal_value: OspGatewaySubscriptionPaymentGateway
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGateway">OspGatewaySubscriptionPaymentGateway</a>

---


### OspGatewaySubscriptionPaymentOptionsList <a name="OspGatewaySubscriptionPaymentOptionsList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OspGatewaySubscriptionPaymentOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OspGatewaySubscriptionPaymentOptionsOutputReference <a name="OspGatewaySubscriptionPaymentOptionsOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.creditCardType">credit_card_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId">ext_billing_agreement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.lastDigits">last_digits</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.nameOnCard">name_on_card</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.paymentMethod">payment_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.timeExpiration">time_expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.walletInstrumentId">wallet_instrument_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.walletTransactionId">wallet_transaction_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptions">OspGatewaySubscriptionPaymentOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credit_card_type`<sup>Required</sup> <a name="credit_card_type" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.creditCardType"></a>

```python
credit_card_type: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `ext_billing_agreement_id`<sup>Required</sup> <a name="ext_billing_agreement_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId"></a>

```python
ext_billing_agreement_id: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_digits`<sup>Required</sup> <a name="last_digits" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.lastDigits"></a>

```python
last_digits: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `name_on_card`<sup>Required</sup> <a name="name_on_card" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.nameOnCard"></a>

```python
name_on_card: str
```

- *Type:* str

---

##### `payment_method`<sup>Required</sup> <a name="payment_method" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.paymentMethod"></a>

```python
payment_method: str
```

- *Type:* str

---

##### `time_expiration`<sup>Required</sup> <a name="time_expiration" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.timeExpiration"></a>

```python
time_expiration: str
```

- *Type:* str

---

##### `wallet_instrument_id`<sup>Required</sup> <a name="wallet_instrument_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.walletInstrumentId"></a>

```python
wallet_instrument_id: str
```

- *Type:* str

---

##### `wallet_transaction_id`<sup>Required</sup> <a name="wallet_transaction_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.walletTransactionId"></a>

```python
wallet_transaction_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.internalValue"></a>

```python
internal_value: OspGatewaySubscriptionPaymentOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptions">OspGatewaySubscriptionPaymentOptions</a>

---


### OspGatewaySubscriptionSubscriptionBillingAddressList <a name="OspGatewaySubscriptionSubscriptionBillingAddressList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OspGatewaySubscriptionSubscriptionBillingAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress">OspGatewaySubscriptionSubscriptionBillingAddress</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OspGatewaySubscriptionSubscriptionBillingAddress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress">OspGatewaySubscriptionSubscriptionBillingAddress</a>]]

---


### OspGatewaySubscriptionSubscriptionBillingAddressOutputReference <a name="OspGatewaySubscriptionSubscriptionBillingAddressOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetAddressKey">reset_address_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCity">reset_city</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCompanyName">reset_company_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetContributorClass">reset_contributor_class</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCountry">reset_country</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCounty">reset_county</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetDepartmentName">reset_department_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetEmailAddress">reset_email_address</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetFirstName">reset_first_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetInternalNumber">reset_internal_number</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetJobTitle">reset_job_title</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLastName">reset_last_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine1">reset_line1</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine2">reset_line2</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine3">reset_line3</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine4">reset_line4</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetMiddleName">reset_middle_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetMunicipalInscription">reset_municipal_inscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPhoneCountryCode">reset_phone_country_code</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPhoneNumber">reset_phone_number</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPostalCode">reset_postal_code</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetProvince">reset_province</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStateInscription">reset_state_inscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStreetName">reset_street_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStreetNumber">reset_street_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address_key` <a name="reset_address_key" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetAddressKey"></a>

```python
def reset_address_key() -> None
```

##### `reset_city` <a name="reset_city" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCity"></a>

```python
def reset_city() -> None
```

##### `reset_company_name` <a name="reset_company_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCompanyName"></a>

```python
def reset_company_name() -> None
```

##### `reset_contributor_class` <a name="reset_contributor_class" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetContributorClass"></a>

```python
def reset_contributor_class() -> None
```

##### `reset_country` <a name="reset_country" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCountry"></a>

```python
def reset_country() -> None
```

##### `reset_county` <a name="reset_county" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCounty"></a>

```python
def reset_county() -> None
```

##### `reset_department_name` <a name="reset_department_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetDepartmentName"></a>

```python
def reset_department_name() -> None
```

##### `reset_email_address` <a name="reset_email_address" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetEmailAddress"></a>

```python
def reset_email_address() -> None
```

##### `reset_first_name` <a name="reset_first_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetFirstName"></a>

```python
def reset_first_name() -> None
```

##### `reset_internal_number` <a name="reset_internal_number" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetInternalNumber"></a>

```python
def reset_internal_number() -> None
```

##### `reset_job_title` <a name="reset_job_title" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetJobTitle"></a>

```python
def reset_job_title() -> None
```

##### `reset_last_name` <a name="reset_last_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLastName"></a>

```python
def reset_last_name() -> None
```

##### `reset_line1` <a name="reset_line1" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine1"></a>

```python
def reset_line1() -> None
```

##### `reset_line2` <a name="reset_line2" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine2"></a>

```python
def reset_line2() -> None
```

##### `reset_line3` <a name="reset_line3" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine3"></a>

```python
def reset_line3() -> None
```

##### `reset_line4` <a name="reset_line4" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine4"></a>

```python
def reset_line4() -> None
```

##### `reset_middle_name` <a name="reset_middle_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetMiddleName"></a>

```python
def reset_middle_name() -> None
```

##### `reset_municipal_inscription` <a name="reset_municipal_inscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetMunicipalInscription"></a>

```python
def reset_municipal_inscription() -> None
```

##### `reset_phone_country_code` <a name="reset_phone_country_code" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPhoneCountryCode"></a>

```python
def reset_phone_country_code() -> None
```

##### `reset_phone_number` <a name="reset_phone_number" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPhoneNumber"></a>

```python
def reset_phone_number() -> None
```

##### `reset_postal_code` <a name="reset_postal_code" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPostalCode"></a>

```python
def reset_postal_code() -> None
```

##### `reset_province` <a name="reset_province" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetProvince"></a>

```python
def reset_province() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_state_inscription` <a name="reset_state_inscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStateInscription"></a>

```python
def reset_state_inscription() -> None
```

##### `reset_street_name` <a name="reset_street_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStreetName"></a>

```python
def reset_street_name() -> None
```

##### `reset_street_number` <a name="reset_street_number" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStreetNumber"></a>

```python
def reset_street_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.addressKeyInput">address_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.cityInput">city_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.companyNameInput">company_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.contributorClassInput">contributor_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.countyInput">county_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.departmentNameInput">department_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.emailAddressInput">email_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.firstNameInput">first_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalNumberInput">internal_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.jobTitleInput">job_title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line1Input">line1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line2Input">line2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line3Input">line3_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line4Input">line4_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.middleNameInput">middle_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.municipalInscriptionInput">municipal_inscription_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneCountryCodeInput">phone_country_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.postalCodeInput">postal_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.provinceInput">province_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInscriptionInput">state_inscription_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNameInput">street_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNumberInput">street_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.addressKey">address_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.companyName">company_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.contributorClass">contributor_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.county">county</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.departmentName">department_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalNumber">internal_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.jobTitle">job_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line1">line1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line2">line2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line3">line3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line4">line4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.middleName">middle_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.municipalInscription">municipal_inscription</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneCountryCode">phone_country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.province">province</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInscription">state_inscription</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetName">street_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNumber">street_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress">OspGatewaySubscriptionSubscriptionBillingAddress</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_key_input`<sup>Optional</sup> <a name="address_key_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.addressKeyInput"></a>

```python
address_key_input: str
```

- *Type:* str

---

##### `city_input`<sup>Optional</sup> <a name="city_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.cityInput"></a>

```python
city_input: str
```

- *Type:* str

---

##### `company_name_input`<sup>Optional</sup> <a name="company_name_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.companyNameInput"></a>

```python
company_name_input: str
```

- *Type:* str

---

##### `contributor_class_input`<sup>Optional</sup> <a name="contributor_class_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.contributorClassInput"></a>

```python
contributor_class_input: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `county_input`<sup>Optional</sup> <a name="county_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.countyInput"></a>

```python
county_input: str
```

- *Type:* str

---

##### `department_name_input`<sup>Optional</sup> <a name="department_name_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.departmentNameInput"></a>

```python
department_name_input: str
```

- *Type:* str

---

##### `email_address_input`<sup>Optional</sup> <a name="email_address_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.emailAddressInput"></a>

```python
email_address_input: str
```

- *Type:* str

---

##### `first_name_input`<sup>Optional</sup> <a name="first_name_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.firstNameInput"></a>

```python
first_name_input: str
```

- *Type:* str

---

##### `internal_number_input`<sup>Optional</sup> <a name="internal_number_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalNumberInput"></a>

```python
internal_number_input: str
```

- *Type:* str

---

##### `job_title_input`<sup>Optional</sup> <a name="job_title_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.jobTitleInput"></a>

```python
job_title_input: str
```

- *Type:* str

---

##### `last_name_input`<sup>Optional</sup> <a name="last_name_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.lastNameInput"></a>

```python
last_name_input: str
```

- *Type:* str

---

##### `line1_input`<sup>Optional</sup> <a name="line1_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line1Input"></a>

```python
line1_input: str
```

- *Type:* str

---

##### `line2_input`<sup>Optional</sup> <a name="line2_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line2Input"></a>

```python
line2_input: str
```

- *Type:* str

---

##### `line3_input`<sup>Optional</sup> <a name="line3_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line3Input"></a>

```python
line3_input: str
```

- *Type:* str

---

##### `line4_input`<sup>Optional</sup> <a name="line4_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line4Input"></a>

```python
line4_input: str
```

- *Type:* str

---

##### `middle_name_input`<sup>Optional</sup> <a name="middle_name_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.middleNameInput"></a>

```python
middle_name_input: str
```

- *Type:* str

---

##### `municipal_inscription_input`<sup>Optional</sup> <a name="municipal_inscription_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.municipalInscriptionInput"></a>

```python
municipal_inscription_input: str
```

- *Type:* str

---

##### `phone_country_code_input`<sup>Optional</sup> <a name="phone_country_code_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneCountryCodeInput"></a>

```python
phone_country_code_input: str
```

- *Type:* str

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `postal_code_input`<sup>Optional</sup> <a name="postal_code_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.postalCodeInput"></a>

```python
postal_code_input: str
```

- *Type:* str

---

##### `province_input`<sup>Optional</sup> <a name="province_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.provinceInput"></a>

```python
province_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `state_inscription_input`<sup>Optional</sup> <a name="state_inscription_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInscriptionInput"></a>

```python
state_inscription_input: str
```

- *Type:* str

---

##### `street_name_input`<sup>Optional</sup> <a name="street_name_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNameInput"></a>

```python
street_name_input: str
```

- *Type:* str

---

##### `street_number_input`<sup>Optional</sup> <a name="street_number_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNumberInput"></a>

```python
street_number_input: str
```

- *Type:* str

---

##### `address_key`<sup>Required</sup> <a name="address_key" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.addressKey"></a>

```python
address_key: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `company_name`<sup>Required</sup> <a name="company_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.companyName"></a>

```python
company_name: str
```

- *Type:* str

---

##### `contributor_class`<sup>Required</sup> <a name="contributor_class" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.contributorClass"></a>

```python
contributor_class: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `county`<sup>Required</sup> <a name="county" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.county"></a>

```python
county: str
```

- *Type:* str

---

##### `department_name`<sup>Required</sup> <a name="department_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.departmentName"></a>

```python
department_name: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `internal_number`<sup>Required</sup> <a name="internal_number" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalNumber"></a>

```python
internal_number: str
```

- *Type:* str

---

##### `job_title`<sup>Required</sup> <a name="job_title" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.jobTitle"></a>

```python
job_title: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `line1`<sup>Required</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line1"></a>

```python
line1: str
```

- *Type:* str

---

##### `line2`<sup>Required</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line2"></a>

```python
line2: str
```

- *Type:* str

---

##### `line3`<sup>Required</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line3"></a>

```python
line3: str
```

- *Type:* str

---

##### `line4`<sup>Required</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line4"></a>

```python
line4: str
```

- *Type:* str

---

##### `middle_name`<sup>Required</sup> <a name="middle_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.middleName"></a>

```python
middle_name: str
```

- *Type:* str

---

##### `municipal_inscription`<sup>Required</sup> <a name="municipal_inscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.municipalInscription"></a>

```python
municipal_inscription: str
```

- *Type:* str

---

##### `phone_country_code`<sup>Required</sup> <a name="phone_country_code" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneCountryCode"></a>

```python
phone_country_code: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `province`<sup>Required</sup> <a name="province" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.province"></a>

```python
province: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_inscription`<sup>Required</sup> <a name="state_inscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInscription"></a>

```python
state_inscription: str
```

- *Type:* str

---

##### `street_name`<sup>Required</sup> <a name="street_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetName"></a>

```python
street_name: str
```

- *Type:* str

---

##### `street_number`<sup>Required</sup> <a name="street_number" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNumber"></a>

```python
street_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OspGatewaySubscriptionSubscriptionBillingAddress]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress">OspGatewaySubscriptionSubscriptionBillingAddress</a>]

---


### OspGatewaySubscriptionSubscriptionOutputReference <a name="OspGatewaySubscriptionSubscriptionOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putBillingAddress">put_billing_address</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentGateway">put_payment_gateway</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentOptions">put_payment_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putTaxInfo">put_tax_info</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetAccountType">reset_account_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetBillingAddress">reset_billing_address</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetBillToCustAccountId">reset_bill_to_cust_account_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetCurrencyCode">reset_currency_code</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetGsiOrgCode">reset_gsi_org_code</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetIsIntentToPay">reset_is_intent_to_pay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetLanguageCode">reset_language_code</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetOrganizationId">reset_organization_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPaymentGateway">reset_payment_gateway</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPaymentOptions">reset_payment_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPlanType">reset_plan_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetShipToCustAcctRoleId">reset_ship_to_cust_acct_role_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetShipToCustAcctSiteId">reset_ship_to_cust_acct_site_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTaxInfo">reset_tax_info</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimePersonalToCorporateConv">reset_time_personal_to_corporate_conv</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimePlanUpgrade">reset_time_plan_upgrade</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimeStart">reset_time_start</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetUpgradeState">reset_upgrade_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetUpgradeStateDetails">reset_upgrade_state_details</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_billing_address` <a name="put_billing_address" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putBillingAddress"></a>

```python
def put_billing_address(
  value: typing.Union[IResolvable, typing.List[OspGatewaySubscriptionSubscriptionBillingAddress]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putBillingAddress.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress">OspGatewaySubscriptionSubscriptionBillingAddress</a>]]

---

##### `put_payment_gateway` <a name="put_payment_gateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentGateway"></a>

```python
def put_payment_gateway(
  merchant_defined_data: OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData = None
) -> None
```

###### `merchant_defined_data`<sup>Optional</sup> <a name="merchant_defined_data" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentGateway.parameter.merchantDefinedData"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a>

merchant_defined_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#merchant_defined_data OspGatewaySubscription#merchant_defined_data}

---

##### `put_payment_options` <a name="put_payment_options" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentOptions"></a>

```python
def put_payment_options(
  value: typing.Union[IResolvable, typing.List[OspGatewaySubscriptionSubscriptionPaymentOptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentOptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions">OspGatewaySubscriptionSubscriptionPaymentOptions</a>]]

---

##### `put_tax_info` <a name="put_tax_info" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putTaxInfo"></a>

```python
def put_tax_info(
  no_tax_reason_code: str = None,
  no_tax_reason_code_details: str = None,
  tax_cnpj: str = None,
  tax_payer_id: str = None,
  tax_reg_number: str = None
) -> None
```

###### `no_tax_reason_code`<sup>Optional</sup> <a name="no_tax_reason_code" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putTaxInfo.parameter.noTaxReasonCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#no_tax_reason_code OspGatewaySubscription#no_tax_reason_code}.

---

###### `no_tax_reason_code_details`<sup>Optional</sup> <a name="no_tax_reason_code_details" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putTaxInfo.parameter.noTaxReasonCodeDetails"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#no_tax_reason_code_details OspGatewaySubscription#no_tax_reason_code_details}.

---

###### `tax_cnpj`<sup>Optional</sup> <a name="tax_cnpj" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putTaxInfo.parameter.taxCnpj"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_cnpj OspGatewaySubscription#tax_cnpj}.

---

###### `tax_payer_id`<sup>Optional</sup> <a name="tax_payer_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putTaxInfo.parameter.taxPayerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_payer_id OspGatewaySubscription#tax_payer_id}.

---

###### `tax_reg_number`<sup>Optional</sup> <a name="tax_reg_number" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putTaxInfo.parameter.taxRegNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_reg_number OspGatewaySubscription#tax_reg_number}.

---

##### `reset_account_type` <a name="reset_account_type" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetAccountType"></a>

```python
def reset_account_type() -> None
```

##### `reset_billing_address` <a name="reset_billing_address" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetBillingAddress"></a>

```python
def reset_billing_address() -> None
```

##### `reset_bill_to_cust_account_id` <a name="reset_bill_to_cust_account_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetBillToCustAccountId"></a>

```python
def reset_bill_to_cust_account_id() -> None
```

##### `reset_currency_code` <a name="reset_currency_code" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetCurrencyCode"></a>

```python
def reset_currency_code() -> None
```

##### `reset_gsi_org_code` <a name="reset_gsi_org_code" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetGsiOrgCode"></a>

```python
def reset_gsi_org_code() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_intent_to_pay` <a name="reset_is_intent_to_pay" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetIsIntentToPay"></a>

```python
def reset_is_intent_to_pay() -> None
```

##### `reset_language_code` <a name="reset_language_code" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetLanguageCode"></a>

```python
def reset_language_code() -> None
```

##### `reset_organization_id` <a name="reset_organization_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetOrganizationId"></a>

```python
def reset_organization_id() -> None
```

##### `reset_payment_gateway` <a name="reset_payment_gateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPaymentGateway"></a>

```python
def reset_payment_gateway() -> None
```

##### `reset_payment_options` <a name="reset_payment_options" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPaymentOptions"></a>

```python
def reset_payment_options() -> None
```

##### `reset_plan_type` <a name="reset_plan_type" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPlanType"></a>

```python
def reset_plan_type() -> None
```

##### `reset_ship_to_cust_acct_role_id` <a name="reset_ship_to_cust_acct_role_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetShipToCustAcctRoleId"></a>

```python
def reset_ship_to_cust_acct_role_id() -> None
```

##### `reset_ship_to_cust_acct_site_id` <a name="reset_ship_to_cust_acct_site_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetShipToCustAcctSiteId"></a>

```python
def reset_ship_to_cust_acct_site_id() -> None
```

##### `reset_tax_info` <a name="reset_tax_info" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTaxInfo"></a>

```python
def reset_tax_info() -> None
```

##### `reset_time_personal_to_corporate_conv` <a name="reset_time_personal_to_corporate_conv" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimePersonalToCorporateConv"></a>

```python
def reset_time_personal_to_corporate_conv() -> None
```

##### `reset_time_plan_upgrade` <a name="reset_time_plan_upgrade" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimePlanUpgrade"></a>

```python
def reset_time_plan_upgrade() -> None
```

##### `reset_time_start` <a name="reset_time_start" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimeStart"></a>

```python
def reset_time_start() -> None
```

##### `reset_upgrade_state` <a name="reset_upgrade_state" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetUpgradeState"></a>

```python
def reset_upgrade_state() -> None
```

##### `reset_upgrade_state_details` <a name="reset_upgrade_state_details" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetUpgradeStateDetails"></a>

```python
def reset_upgrade_state_details() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billingAddress">billing_address</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList">OspGatewaySubscriptionSubscriptionBillingAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentGateway">payment_gateway</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference">OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentOptions">payment_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList">OspGatewaySubscriptionSubscriptionPaymentOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.taxInfo">tax_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference">OspGatewaySubscriptionSubscriptionTaxInfoOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.accountTypeInput">account_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billingAddressInput">billing_address_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress">OspGatewaySubscriptionSubscriptionBillingAddress</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billToCustAccountIdInput">bill_to_cust_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.currencyCodeInput">currency_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.gsiOrgCodeInput">gsi_org_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.isIntentToPayInput">is_intent_to_pay_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.languageCodeInput">language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.organizationIdInput">organization_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentGatewayInput">payment_gateway_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentOptionsInput">payment_options_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions">OspGatewaySubscriptionSubscriptionPaymentOptions</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.planTypeInput">plan_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctRoleIdInput">ship_to_cust_acct_role_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctSiteIdInput">ship_to_cust_acct_site_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.subscriptionPlanNumberInput">subscription_plan_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.taxInfoInput">tax_info_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePersonalToCorporateConvInput">time_personal_to_corporate_conv_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePlanUpgradeInput">time_plan_upgrade_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timeStartInput">time_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateDetailsInput">upgrade_state_details_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateInput">upgrade_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.accountType">account_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billToCustAccountId">bill_to_cust_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.currencyCode">currency_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.gsiOrgCode">gsi_org_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.isIntentToPay">is_intent_to_pay</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.planType">plan_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctRoleId">ship_to_cust_acct_role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctSiteId">ship_to_cust_acct_site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.subscriptionPlanNumber">subscription_plan_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePersonalToCorporateConv">time_personal_to_corporate_conv</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePlanUpgrade">time_plan_upgrade</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeState">upgrade_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateDetails">upgrade_state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `billing_address`<sup>Required</sup> <a name="billing_address" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billingAddress"></a>

```python
billing_address: OspGatewaySubscriptionSubscriptionBillingAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList">OspGatewaySubscriptionSubscriptionBillingAddressList</a>

---

##### `payment_gateway`<sup>Required</sup> <a name="payment_gateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentGateway"></a>

```python
payment_gateway: OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference">OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference</a>

---

##### `payment_options`<sup>Required</sup> <a name="payment_options" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentOptions"></a>

```python
payment_options: OspGatewaySubscriptionSubscriptionPaymentOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList">OspGatewaySubscriptionSubscriptionPaymentOptionsList</a>

---

##### `tax_info`<sup>Required</sup> <a name="tax_info" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.taxInfo"></a>

```python
tax_info: OspGatewaySubscriptionSubscriptionTaxInfoOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference">OspGatewaySubscriptionSubscriptionTaxInfoOutputReference</a>

---

##### `account_type_input`<sup>Optional</sup> <a name="account_type_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.accountTypeInput"></a>

```python
account_type_input: str
```

- *Type:* str

---

##### `billing_address_input`<sup>Optional</sup> <a name="billing_address_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billingAddressInput"></a>

```python
billing_address_input: typing.Union[IResolvable, typing.List[OspGatewaySubscriptionSubscriptionBillingAddress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress">OspGatewaySubscriptionSubscriptionBillingAddress</a>]]

---

##### `bill_to_cust_account_id_input`<sup>Optional</sup> <a name="bill_to_cust_account_id_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billToCustAccountIdInput"></a>

```python
bill_to_cust_account_id_input: str
```

- *Type:* str

---

##### `currency_code_input`<sup>Optional</sup> <a name="currency_code_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.currencyCodeInput"></a>

```python
currency_code_input: str
```

- *Type:* str

---

##### `gsi_org_code_input`<sup>Optional</sup> <a name="gsi_org_code_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.gsiOrgCodeInput"></a>

```python
gsi_org_code_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_intent_to_pay_input`<sup>Optional</sup> <a name="is_intent_to_pay_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.isIntentToPayInput"></a>

```python
is_intent_to_pay_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `language_code_input`<sup>Optional</sup> <a name="language_code_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.languageCodeInput"></a>

```python
language_code_input: str
```

- *Type:* str

---

##### `organization_id_input`<sup>Optional</sup> <a name="organization_id_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.organizationIdInput"></a>

```python
organization_id_input: str
```

- *Type:* str

---

##### `payment_gateway_input`<sup>Optional</sup> <a name="payment_gateway_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentGatewayInput"></a>

```python
payment_gateway_input: OspGatewaySubscriptionSubscriptionPaymentGateway
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a>

---

##### `payment_options_input`<sup>Optional</sup> <a name="payment_options_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentOptionsInput"></a>

```python
payment_options_input: typing.Union[IResolvable, typing.List[OspGatewaySubscriptionSubscriptionPaymentOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions">OspGatewaySubscriptionSubscriptionPaymentOptions</a>]]

---

##### `plan_type_input`<sup>Optional</sup> <a name="plan_type_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.planTypeInput"></a>

```python
plan_type_input: str
```

- *Type:* str

---

##### `ship_to_cust_acct_role_id_input`<sup>Optional</sup> <a name="ship_to_cust_acct_role_id_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctRoleIdInput"></a>

```python
ship_to_cust_acct_role_id_input: str
```

- *Type:* str

---

##### `ship_to_cust_acct_site_id_input`<sup>Optional</sup> <a name="ship_to_cust_acct_site_id_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctSiteIdInput"></a>

```python
ship_to_cust_acct_site_id_input: str
```

- *Type:* str

---

##### `subscription_plan_number_input`<sup>Optional</sup> <a name="subscription_plan_number_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.subscriptionPlanNumberInput"></a>

```python
subscription_plan_number_input: str
```

- *Type:* str

---

##### `tax_info_input`<sup>Optional</sup> <a name="tax_info_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.taxInfoInput"></a>

```python
tax_info_input: OspGatewaySubscriptionSubscriptionTaxInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a>

---

##### `time_personal_to_corporate_conv_input`<sup>Optional</sup> <a name="time_personal_to_corporate_conv_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePersonalToCorporateConvInput"></a>

```python
time_personal_to_corporate_conv_input: str
```

- *Type:* str

---

##### `time_plan_upgrade_input`<sup>Optional</sup> <a name="time_plan_upgrade_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePlanUpgradeInput"></a>

```python
time_plan_upgrade_input: str
```

- *Type:* str

---

##### `time_start_input`<sup>Optional</sup> <a name="time_start_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timeStartInput"></a>

```python
time_start_input: str
```

- *Type:* str

---

##### `upgrade_state_details_input`<sup>Optional</sup> <a name="upgrade_state_details_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateDetailsInput"></a>

```python
upgrade_state_details_input: str
```

- *Type:* str

---

##### `upgrade_state_input`<sup>Optional</sup> <a name="upgrade_state_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateInput"></a>

```python
upgrade_state_input: str
```

- *Type:* str

---

##### `account_type`<sup>Required</sup> <a name="account_type" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.accountType"></a>

```python
account_type: str
```

- *Type:* str

---

##### `bill_to_cust_account_id`<sup>Required</sup> <a name="bill_to_cust_account_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billToCustAccountId"></a>

```python
bill_to_cust_account_id: str
```

- *Type:* str

---

##### `currency_code`<sup>Required</sup> <a name="currency_code" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.currencyCode"></a>

```python
currency_code: str
```

- *Type:* str

---

##### `gsi_org_code`<sup>Required</sup> <a name="gsi_org_code" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.gsiOrgCode"></a>

```python
gsi_org_code: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_intent_to_pay`<sup>Required</sup> <a name="is_intent_to_pay" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.isIntentToPay"></a>

```python
is_intent_to_pay: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `plan_type`<sup>Required</sup> <a name="plan_type" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.planType"></a>

```python
plan_type: str
```

- *Type:* str

---

##### `ship_to_cust_acct_role_id`<sup>Required</sup> <a name="ship_to_cust_acct_role_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctRoleId"></a>

```python
ship_to_cust_acct_role_id: str
```

- *Type:* str

---

##### `ship_to_cust_acct_site_id`<sup>Required</sup> <a name="ship_to_cust_acct_site_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctSiteId"></a>

```python
ship_to_cust_acct_site_id: str
```

- *Type:* str

---

##### `subscription_plan_number`<sup>Required</sup> <a name="subscription_plan_number" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.subscriptionPlanNumber"></a>

```python
subscription_plan_number: str
```

- *Type:* str

---

##### `time_personal_to_corporate_conv`<sup>Required</sup> <a name="time_personal_to_corporate_conv" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePersonalToCorporateConv"></a>

```python
time_personal_to_corporate_conv: str
```

- *Type:* str

---

##### `time_plan_upgrade`<sup>Required</sup> <a name="time_plan_upgrade" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePlanUpgrade"></a>

```python
time_plan_upgrade: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `upgrade_state`<sup>Required</sup> <a name="upgrade_state" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeState"></a>

```python
upgrade_state: str
```

- *Type:* str

---

##### `upgrade_state_details`<sup>Required</sup> <a name="upgrade_state_details" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateDetails"></a>

```python
upgrade_state_details: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.internalValue"></a>

```python
internal_value: OspGatewaySubscriptionSubscription
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a>

---


### OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference <a name="OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resetCloudAccountName">reset_cloud_account_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resetPromoType">reset_promo_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cloud_account_name` <a name="reset_cloud_account_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resetCloudAccountName"></a>

```python
def reset_cloud_account_name() -> None
```

##### `reset_promo_type` <a name="reset_promo_type" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resetPromoType"></a>

```python
def reset_promo_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountNameInput">cloud_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoTypeInput">promo_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName">cloud_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType">promo_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_account_name_input`<sup>Optional</sup> <a name="cloud_account_name_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountNameInput"></a>

```python
cloud_account_name_input: str
```

- *Type:* str

---

##### `promo_type_input`<sup>Optional</sup> <a name="promo_type_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoTypeInput"></a>

```python
promo_type_input: str
```

- *Type:* str

---

##### `cloud_account_name`<sup>Required</sup> <a name="cloud_account_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName"></a>

```python
cloud_account_name: str
```

- *Type:* str

---

##### `promo_type`<sup>Required</sup> <a name="promo_type" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType"></a>

```python
promo_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue"></a>

```python
internal_value: OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a>

---


### OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference <a name="OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.putMerchantDefinedData">put_merchant_defined_data</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resetMerchantDefinedData">reset_merchant_defined_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_merchant_defined_data` <a name="put_merchant_defined_data" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.putMerchantDefinedData"></a>

```python
def put_merchant_defined_data(
  cloud_account_name: str = None,
  promo_type: str = None
) -> None
```

###### `cloud_account_name`<sup>Optional</sup> <a name="cloud_account_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.putMerchantDefinedData.parameter.cloudAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#cloud_account_name OspGatewaySubscription#cloud_account_name}.

---

###### `promo_type`<sup>Optional</sup> <a name="promo_type" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.putMerchantDefinedData.parameter.promoType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#promo_type OspGatewaySubscription#promo_type}.

---

##### `reset_merchant_defined_data` <a name="reset_merchant_defined_data" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resetMerchantDefinedData"></a>

```python
def reset_merchant_defined_data() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.merchantDefinedData">merchant_defined_data</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.merchantDefinedDataInput">merchant_defined_data_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `merchant_defined_data`<sup>Required</sup> <a name="merchant_defined_data" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.merchantDefinedData"></a>

```python
merchant_defined_data: OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference</a>

---

##### `merchant_defined_data_input`<sup>Optional</sup> <a name="merchant_defined_data_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.merchantDefinedDataInput"></a>

```python
merchant_defined_data_input: OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.internalValue"></a>

```python
internal_value: OspGatewaySubscriptionSubscriptionPaymentGateway
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a>

---


### OspGatewaySubscriptionSubscriptionPaymentOptionsList <a name="OspGatewaySubscriptionSubscriptionPaymentOptionsList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions">OspGatewaySubscriptionSubscriptionPaymentOptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OspGatewaySubscriptionSubscriptionPaymentOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions">OspGatewaySubscriptionSubscriptionPaymentOptions</a>]]

---


### OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference <a name="OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetCreditCardType">reset_credit_card_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetEmailAddress">reset_email_address</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetExtBillingAgreementId">reset_ext_billing_agreement_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetFirstName">reset_first_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetLastDigits">reset_last_digits</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetLastName">reset_last_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetNameOnCard">reset_name_on_card</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetTimeExpiration">reset_time_expiration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetWalletInstrumentId">reset_wallet_instrument_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetWalletTransactionId">reset_wallet_transaction_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_credit_card_type` <a name="reset_credit_card_type" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetCreditCardType"></a>

```python
def reset_credit_card_type() -> None
```

##### `reset_email_address` <a name="reset_email_address" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetEmailAddress"></a>

```python
def reset_email_address() -> None
```

##### `reset_ext_billing_agreement_id` <a name="reset_ext_billing_agreement_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetExtBillingAgreementId"></a>

```python
def reset_ext_billing_agreement_id() -> None
```

##### `reset_first_name` <a name="reset_first_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetFirstName"></a>

```python
def reset_first_name() -> None
```

##### `reset_last_digits` <a name="reset_last_digits" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetLastDigits"></a>

```python
def reset_last_digits() -> None
```

##### `reset_last_name` <a name="reset_last_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetLastName"></a>

```python
def reset_last_name() -> None
```

##### `reset_name_on_card` <a name="reset_name_on_card" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetNameOnCard"></a>

```python
def reset_name_on_card() -> None
```

##### `reset_time_expiration` <a name="reset_time_expiration" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetTimeExpiration"></a>

```python
def reset_time_expiration() -> None
```

##### `reset_wallet_instrument_id` <a name="reset_wallet_instrument_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetWalletInstrumentId"></a>

```python
def reset_wallet_instrument_id() -> None
```

##### `reset_wallet_transaction_id` <a name="reset_wallet_transaction_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetWalletTransactionId"></a>

```python
def reset_wallet_transaction_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creditCardTypeInput">credit_card_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.emailAddressInput">email_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementIdInput">ext_billing_agreement_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.firstNameInput">first_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastDigitsInput">last_digits_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.nameOnCardInput">name_on_card_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.paymentMethodInput">payment_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.timeExpirationInput">time_expiration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletInstrumentIdInput">wallet_instrument_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletTransactionIdInput">wallet_transaction_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creditCardType">credit_card_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId">ext_billing_agreement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastDigits">last_digits</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.nameOnCard">name_on_card</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.paymentMethod">payment_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.timeExpiration">time_expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletInstrumentId">wallet_instrument_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletTransactionId">wallet_transaction_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions">OspGatewaySubscriptionSubscriptionPaymentOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credit_card_type_input`<sup>Optional</sup> <a name="credit_card_type_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creditCardTypeInput"></a>

```python
credit_card_type_input: str
```

- *Type:* str

---

##### `email_address_input`<sup>Optional</sup> <a name="email_address_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.emailAddressInput"></a>

```python
email_address_input: str
```

- *Type:* str

---

##### `ext_billing_agreement_id_input`<sup>Optional</sup> <a name="ext_billing_agreement_id_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementIdInput"></a>

```python
ext_billing_agreement_id_input: str
```

- *Type:* str

---

##### `first_name_input`<sup>Optional</sup> <a name="first_name_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.firstNameInput"></a>

```python
first_name_input: str
```

- *Type:* str

---

##### `last_digits_input`<sup>Optional</sup> <a name="last_digits_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastDigitsInput"></a>

```python
last_digits_input: str
```

- *Type:* str

---

##### `last_name_input`<sup>Optional</sup> <a name="last_name_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastNameInput"></a>

```python
last_name_input: str
```

- *Type:* str

---

##### `name_on_card_input`<sup>Optional</sup> <a name="name_on_card_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.nameOnCardInput"></a>

```python
name_on_card_input: str
```

- *Type:* str

---

##### `payment_method_input`<sup>Optional</sup> <a name="payment_method_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.paymentMethodInput"></a>

```python
payment_method_input: str
```

- *Type:* str

---

##### `time_expiration_input`<sup>Optional</sup> <a name="time_expiration_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.timeExpirationInput"></a>

```python
time_expiration_input: str
```

- *Type:* str

---

##### `wallet_instrument_id_input`<sup>Optional</sup> <a name="wallet_instrument_id_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletInstrumentIdInput"></a>

```python
wallet_instrument_id_input: str
```

- *Type:* str

---

##### `wallet_transaction_id_input`<sup>Optional</sup> <a name="wallet_transaction_id_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletTransactionIdInput"></a>

```python
wallet_transaction_id_input: str
```

- *Type:* str

---

##### `credit_card_type`<sup>Required</sup> <a name="credit_card_type" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creditCardType"></a>

```python
credit_card_type: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `ext_billing_agreement_id`<sup>Required</sup> <a name="ext_billing_agreement_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId"></a>

```python
ext_billing_agreement_id: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_digits`<sup>Required</sup> <a name="last_digits" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastDigits"></a>

```python
last_digits: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `name_on_card`<sup>Required</sup> <a name="name_on_card" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.nameOnCard"></a>

```python
name_on_card: str
```

- *Type:* str

---

##### `payment_method`<sup>Required</sup> <a name="payment_method" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.paymentMethod"></a>

```python
payment_method: str
```

- *Type:* str

---

##### `time_expiration`<sup>Required</sup> <a name="time_expiration" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.timeExpiration"></a>

```python
time_expiration: str
```

- *Type:* str

---

##### `wallet_instrument_id`<sup>Required</sup> <a name="wallet_instrument_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletInstrumentId"></a>

```python
wallet_instrument_id: str
```

- *Type:* str

---

##### `wallet_transaction_id`<sup>Required</sup> <a name="wallet_transaction_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletTransactionId"></a>

```python
wallet_transaction_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OspGatewaySubscriptionSubscriptionPaymentOptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions">OspGatewaySubscriptionSubscriptionPaymentOptions</a>]

---


### OspGatewaySubscriptionSubscriptionTaxInfoOutputReference <a name="OspGatewaySubscriptionSubscriptionTaxInfoOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetNoTaxReasonCode">reset_no_tax_reason_code</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetNoTaxReasonCodeDetails">reset_no_tax_reason_code_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxCnpj">reset_tax_cnpj</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxPayerId">reset_tax_payer_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxRegNumber">reset_tax_reg_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_no_tax_reason_code` <a name="reset_no_tax_reason_code" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetNoTaxReasonCode"></a>

```python
def reset_no_tax_reason_code() -> None
```

##### `reset_no_tax_reason_code_details` <a name="reset_no_tax_reason_code_details" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetNoTaxReasonCodeDetails"></a>

```python
def reset_no_tax_reason_code_details() -> None
```

##### `reset_tax_cnpj` <a name="reset_tax_cnpj" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxCnpj"></a>

```python
def reset_tax_cnpj() -> None
```

##### `reset_tax_payer_id` <a name="reset_tax_payer_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxPayerId"></a>

```python
def reset_tax_payer_id() -> None
```

##### `reset_tax_reg_number` <a name="reset_tax_reg_number" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxRegNumber"></a>

```python
def reset_tax_reg_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetailsInput">no_tax_reason_code_details_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeInput">no_tax_reason_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxCnpjInput">tax_cnpj_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxPayerIdInput">tax_payer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxRegNumberInput">tax_reg_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCode">no_tax_reason_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails">no_tax_reason_code_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxCnpj">tax_cnpj</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxPayerId">tax_payer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxRegNumber">tax_reg_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `no_tax_reason_code_details_input`<sup>Optional</sup> <a name="no_tax_reason_code_details_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetailsInput"></a>

```python
no_tax_reason_code_details_input: str
```

- *Type:* str

---

##### `no_tax_reason_code_input`<sup>Optional</sup> <a name="no_tax_reason_code_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeInput"></a>

```python
no_tax_reason_code_input: str
```

- *Type:* str

---

##### `tax_cnpj_input`<sup>Optional</sup> <a name="tax_cnpj_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxCnpjInput"></a>

```python
tax_cnpj_input: str
```

- *Type:* str

---

##### `tax_payer_id_input`<sup>Optional</sup> <a name="tax_payer_id_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxPayerIdInput"></a>

```python
tax_payer_id_input: str
```

- *Type:* str

---

##### `tax_reg_number_input`<sup>Optional</sup> <a name="tax_reg_number_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxRegNumberInput"></a>

```python
tax_reg_number_input: str
```

- *Type:* str

---

##### `no_tax_reason_code`<sup>Required</sup> <a name="no_tax_reason_code" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCode"></a>

```python
no_tax_reason_code: str
```

- *Type:* str

---

##### `no_tax_reason_code_details`<sup>Required</sup> <a name="no_tax_reason_code_details" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails"></a>

```python
no_tax_reason_code_details: str
```

- *Type:* str

---

##### `tax_cnpj`<sup>Required</sup> <a name="tax_cnpj" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxCnpj"></a>

```python
tax_cnpj: str
```

- *Type:* str

---

##### `tax_payer_id`<sup>Required</sup> <a name="tax_payer_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxPayerId"></a>

```python
tax_payer_id: str
```

- *Type:* str

---

##### `tax_reg_number`<sup>Required</sup> <a name="tax_reg_number" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxRegNumber"></a>

```python
tax_reg_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.internalValue"></a>

```python
internal_value: OspGatewaySubscriptionSubscriptionTaxInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a>

---


### OspGatewaySubscriptionTaxInfoList <a name="OspGatewaySubscriptionTaxInfoList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OspGatewaySubscriptionTaxInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OspGatewaySubscriptionTaxInfoOutputReference <a name="OspGatewaySubscriptionTaxInfoOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.giro">giro</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.noTaxReasonCode">no_tax_reason_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails">no_tax_reason_code_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxCnpj">tax_cnpj</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxPayerId">tax_payer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxRegNumber">tax_reg_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfo">OspGatewaySubscriptionTaxInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `giro`<sup>Required</sup> <a name="giro" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.giro"></a>

```python
giro: str
```

- *Type:* str

---

##### `no_tax_reason_code`<sup>Required</sup> <a name="no_tax_reason_code" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.noTaxReasonCode"></a>

```python
no_tax_reason_code: str
```

- *Type:* str

---

##### `no_tax_reason_code_details`<sup>Required</sup> <a name="no_tax_reason_code_details" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails"></a>

```python
no_tax_reason_code_details: str
```

- *Type:* str

---

##### `tax_cnpj`<sup>Required</sup> <a name="tax_cnpj" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxCnpj"></a>

```python
tax_cnpj: str
```

- *Type:* str

---

##### `tax_payer_id`<sup>Required</sup> <a name="tax_payer_id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxPayerId"></a>

```python
tax_payer_id: str
```

- *Type:* str

---

##### `tax_reg_number`<sup>Required</sup> <a name="tax_reg_number" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxRegNumber"></a>

```python
tax_reg_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.internalValue"></a>

```python
internal_value: OspGatewaySubscriptionTaxInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfo">OspGatewaySubscriptionTaxInfo</a>

---


### OspGatewaySubscriptionTimeoutsOutputReference <a name="OspGatewaySubscriptionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osp_gateway_subscription

ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OspGatewaySubscriptionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a>]

---



