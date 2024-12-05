# `coreDrgRouteTableRouteRule` Submodule <a name="`coreDrgRouteTableRouteRule` Submodule" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreDrgRouteTableRouteRule <a name="CoreDrgRouteTableRouteRule" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule oci_core_drg_route_table_route_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_drg_route_table_route_rule

coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: str,
  destination_type: str,
  drg_route_table_id: str,
  next_hop_drg_attachment_id: str,
  id: str = None,
  timeouts: CoreDrgRouteTableRouteRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#destination CoreDrgRouteTableRouteRule#destination}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.destinationType">destination_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#destination_type CoreDrgRouteTableRouteRule#destination_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.drgRouteTableId">drg_route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#drg_route_table_id CoreDrgRouteTableRouteRule#drg_route_table_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.nextHopDrgAttachmentId">next_hop_drg_attachment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#next_hop_drg_attachment_id CoreDrgRouteTableRouteRule#next_hop_drg_attachment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#id CoreDrgRouteTableRouteRule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts">CoreDrgRouteTableRouteRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#destination CoreDrgRouteTableRouteRule#destination}.

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.destinationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#destination_type CoreDrgRouteTableRouteRule#destination_type}.

---

##### `drg_route_table_id`<sup>Required</sup> <a name="drg_route_table_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.drgRouteTableId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#drg_route_table_id CoreDrgRouteTableRouteRule#drg_route_table_id}.

---

##### `next_hop_drg_attachment_id`<sup>Required</sup> <a name="next_hop_drg_attachment_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.nextHopDrgAttachmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#next_hop_drg_attachment_id CoreDrgRouteTableRouteRule#next_hop_drg_attachment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#id CoreDrgRouteTableRouteRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts">CoreDrgRouteTableRouteRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#timeouts CoreDrgRouteTableRouteRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#create CoreDrgRouteTableRouteRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#delete CoreDrgRouteTableRouteRule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#update CoreDrgRouteTableRouteRule#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CoreDrgRouteTableRouteRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import core_drg_route_table_route_rule

coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import core_drg_route_table_route_rule

coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import core_drg_route_table_route_rule

coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import core_drg_route_table_route_rule

coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CoreDrgRouteTableRouteRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CoreDrgRouteTableRouteRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CoreDrgRouteTableRouteRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreDrgRouteTableRouteRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.attributes">attributes</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.isBlackhole">is_blackhole</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.isConflict">is_conflict</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.routeProvenance">route_provenance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.routeType">route_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference">CoreDrgRouteTableRouteRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.destinationTypeInput">destination_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.drgRouteTableIdInput">drg_route_table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.nextHopDrgAttachmentIdInput">next_hop_drg_attachment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts">CoreDrgRouteTableRouteRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.destinationType">destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.drgRouteTableId">drg_route_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.nextHopDrgAttachmentId">next_hop_drg_attachment_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.attributes"></a>

```python
attributes: StringMap
```

- *Type:* cdktf.StringMap

---

##### `is_blackhole`<sup>Required</sup> <a name="is_blackhole" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.isBlackhole"></a>

```python
is_blackhole: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_conflict`<sup>Required</sup> <a name="is_conflict" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.isConflict"></a>

```python
is_conflict: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `route_provenance`<sup>Required</sup> <a name="route_provenance" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.routeProvenance"></a>

```python
route_provenance: str
```

- *Type:* str

---

##### `route_type`<sup>Required</sup> <a name="route_type" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.routeType"></a>

```python
route_type: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.timeouts"></a>

```python
timeouts: CoreDrgRouteTableRouteRuleTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference">CoreDrgRouteTableRouteRuleTimeoutsOutputReference</a>

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination_type_input`<sup>Optional</sup> <a name="destination_type_input" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.destinationTypeInput"></a>

```python
destination_type_input: str
```

- *Type:* str

---

##### `drg_route_table_id_input`<sup>Optional</sup> <a name="drg_route_table_id_input" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.drgRouteTableIdInput"></a>

```python
drg_route_table_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `next_hop_drg_attachment_id_input`<sup>Optional</sup> <a name="next_hop_drg_attachment_id_input" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.nextHopDrgAttachmentIdInput"></a>

```python
next_hop_drg_attachment_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CoreDrgRouteTableRouteRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts">CoreDrgRouteTableRouteRuleTimeouts</a>]

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

---

##### `drg_route_table_id`<sup>Required</sup> <a name="drg_route_table_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.drgRouteTableId"></a>

```python
drg_route_table_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `next_hop_drg_attachment_id`<sup>Required</sup> <a name="next_hop_drg_attachment_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.nextHopDrgAttachmentId"></a>

```python
next_hop_drg_attachment_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CoreDrgRouteTableRouteRuleConfig <a name="CoreDrgRouteTableRouteRuleConfig" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_drg_route_table_route_rule

coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: str,
  destination_type: str,
  drg_route_table_id: str,
  next_hop_drg_attachment_id: str,
  id: str = None,
  timeouts: CoreDrgRouteTableRouteRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#destination CoreDrgRouteTableRouteRule#destination}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.destinationType">destination_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#destination_type CoreDrgRouteTableRouteRule#destination_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.drgRouteTableId">drg_route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#drg_route_table_id CoreDrgRouteTableRouteRule#drg_route_table_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.nextHopDrgAttachmentId">next_hop_drg_attachment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#next_hop_drg_attachment_id CoreDrgRouteTableRouteRule#next_hop_drg_attachment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#id CoreDrgRouteTableRouteRule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts">CoreDrgRouteTableRouteRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#destination CoreDrgRouteTableRouteRule#destination}.

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#destination_type CoreDrgRouteTableRouteRule#destination_type}.

---

##### `drg_route_table_id`<sup>Required</sup> <a name="drg_route_table_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.drgRouteTableId"></a>

```python
drg_route_table_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#drg_route_table_id CoreDrgRouteTableRouteRule#drg_route_table_id}.

---

##### `next_hop_drg_attachment_id`<sup>Required</sup> <a name="next_hop_drg_attachment_id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.nextHopDrgAttachmentId"></a>

```python
next_hop_drg_attachment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#next_hop_drg_attachment_id CoreDrgRouteTableRouteRule#next_hop_drg_attachment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#id CoreDrgRouteTableRouteRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.timeouts"></a>

```python
timeouts: CoreDrgRouteTableRouteRuleTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts">CoreDrgRouteTableRouteRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#timeouts CoreDrgRouteTableRouteRule#timeouts}

---

### CoreDrgRouteTableRouteRuleTimeouts <a name="CoreDrgRouteTableRouteRuleTimeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_drg_route_table_route_rule

coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#create CoreDrgRouteTableRouteRule#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#delete CoreDrgRouteTableRouteRule#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#update CoreDrgRouteTableRouteRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#create CoreDrgRouteTableRouteRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#delete CoreDrgRouteTableRouteRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#update CoreDrgRouteTableRouteRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreDrgRouteTableRouteRuleTimeoutsOutputReference <a name="CoreDrgRouteTableRouteRuleTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_drg_route_table_route_rule

coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts">CoreDrgRouteTableRouteRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreDrgRouteTableRouteRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts">CoreDrgRouteTableRouteRuleTimeouts</a>]

---



