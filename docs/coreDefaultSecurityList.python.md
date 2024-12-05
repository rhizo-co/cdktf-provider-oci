# `coreDefaultSecurityList` Submodule <a name="`coreDefaultSecurityList` Submodule" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreDefaultSecurityList <a name="CoreDefaultSecurityList" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list oci_core_default_security_list}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityList(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  manage_default_resource_id: str,
  compartment_id: str = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  egress_security_rules: typing.Union[IResolvable, typing.List[CoreDefaultSecurityListEgressSecurityRules]] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  ingress_security_rules: typing.Union[IResolvable, typing.List[CoreDefaultSecurityListIngressSecurityRules]] = None,
  timeouts: CoreDefaultSecurityListTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.manageDefaultResourceId">manage_default_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#manage_default_resource_id CoreDefaultSecurityList#manage_default_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#compartment_id CoreDefaultSecurityList#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#defined_tags CoreDefaultSecurityList#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#display_name CoreDefaultSecurityList#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.egressSecurityRules">egress_security_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a>]]</code> | egress_security_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#freeform_tags CoreDefaultSecurityList#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#id CoreDefaultSecurityList#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.ingressSecurityRules">ingress_security_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a>]]</code> | ingress_security_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts">CoreDefaultSecurityListTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `manage_default_resource_id`<sup>Required</sup> <a name="manage_default_resource_id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.manageDefaultResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#manage_default_resource_id CoreDefaultSecurityList#manage_default_resource_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#compartment_id CoreDefaultSecurityList#compartment_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#defined_tags CoreDefaultSecurityList#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#display_name CoreDefaultSecurityList#display_name}.

---

##### `egress_security_rules`<sup>Optional</sup> <a name="egress_security_rules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.egressSecurityRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a>]]

egress_security_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#egress_security_rules CoreDefaultSecurityList#egress_security_rules}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#freeform_tags CoreDefaultSecurityList#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#id CoreDefaultSecurityList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress_security_rules`<sup>Optional</sup> <a name="ingress_security_rules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.ingressSecurityRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a>]]

ingress_security_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#ingress_security_rules CoreDefaultSecurityList#ingress_security_rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts">CoreDefaultSecurityListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#timeouts CoreDefaultSecurityList#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putEgressSecurityRules">put_egress_security_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putIngressSecurityRules">put_ingress_security_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetEgressSecurityRules">reset_egress_security_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetIngressSecurityRules">reset_ingress_security_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_egress_security_rules` <a name="put_egress_security_rules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putEgressSecurityRules"></a>

```python
def put_egress_security_rules(
  value: typing.Union[IResolvable, typing.List[CoreDefaultSecurityListEgressSecurityRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putEgressSecurityRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a>]]

---

##### `put_ingress_security_rules` <a name="put_ingress_security_rules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putIngressSecurityRules"></a>

```python
def put_ingress_security_rules(
  value: typing.Union[IResolvable, typing.List[CoreDefaultSecurityListIngressSecurityRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putIngressSecurityRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#create CoreDefaultSecurityList#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#delete CoreDefaultSecurityList#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#update CoreDefaultSecurityList#update}.

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_egress_security_rules` <a name="reset_egress_security_rules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetEgressSecurityRules"></a>

```python
def reset_egress_security_rules() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ingress_security_rules` <a name="reset_ingress_security_rules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetIngressSecurityRules"></a>

```python
def reset_ingress_security_rules() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CoreDefaultSecurityList resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityList.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityList.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityList.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityList.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CoreDefaultSecurityList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CoreDefaultSecurityList to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CoreDefaultSecurityList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreDefaultSecurityList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.egressSecurityRules">egress_security_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList">CoreDefaultSecurityListEgressSecurityRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.ingressSecurityRules">ingress_security_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList">CoreDefaultSecurityListIngressSecurityRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference">CoreDefaultSecurityListTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.egressSecurityRulesInput">egress_security_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.ingressSecurityRulesInput">ingress_security_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.manageDefaultResourceIdInput">manage_default_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts">CoreDefaultSecurityListTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.manageDefaultResourceId">manage_default_resource_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `egress_security_rules`<sup>Required</sup> <a name="egress_security_rules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.egressSecurityRules"></a>

```python
egress_security_rules: CoreDefaultSecurityListEgressSecurityRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList">CoreDefaultSecurityListEgressSecurityRulesList</a>

---

##### `ingress_security_rules`<sup>Required</sup> <a name="ingress_security_rules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.ingressSecurityRules"></a>

```python
ingress_security_rules: CoreDefaultSecurityListIngressSecurityRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList">CoreDefaultSecurityListIngressSecurityRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.timeouts"></a>

```python
timeouts: CoreDefaultSecurityListTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference">CoreDefaultSecurityListTimeoutsOutputReference</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `egress_security_rules_input`<sup>Optional</sup> <a name="egress_security_rules_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.egressSecurityRulesInput"></a>

```python
egress_security_rules_input: typing.Union[IResolvable, typing.List[CoreDefaultSecurityListEgressSecurityRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a>]]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ingress_security_rules_input`<sup>Optional</sup> <a name="ingress_security_rules_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.ingressSecurityRulesInput"></a>

```python
ingress_security_rules_input: typing.Union[IResolvable, typing.List[CoreDefaultSecurityListIngressSecurityRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a>]]

---

##### `manage_default_resource_id_input`<sup>Optional</sup> <a name="manage_default_resource_id_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.manageDefaultResourceIdInput"></a>

```python
manage_default_resource_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CoreDefaultSecurityListTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts">CoreDefaultSecurityListTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `manage_default_resource_id`<sup>Required</sup> <a name="manage_default_resource_id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.manageDefaultResourceId"></a>

```python
manage_default_resource_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CoreDefaultSecurityListConfig <a name="CoreDefaultSecurityListConfig" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityListConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  manage_default_resource_id: str,
  compartment_id: str = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  egress_security_rules: typing.Union[IResolvable, typing.List[CoreDefaultSecurityListEgressSecurityRules]] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  ingress_security_rules: typing.Union[IResolvable, typing.List[CoreDefaultSecurityListIngressSecurityRules]] = None,
  timeouts: CoreDefaultSecurityListTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.manageDefaultResourceId">manage_default_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#manage_default_resource_id CoreDefaultSecurityList#manage_default_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#compartment_id CoreDefaultSecurityList#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#defined_tags CoreDefaultSecurityList#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#display_name CoreDefaultSecurityList#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.egressSecurityRules">egress_security_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a>]]</code> | egress_security_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#freeform_tags CoreDefaultSecurityList#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#id CoreDefaultSecurityList#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.ingressSecurityRules">ingress_security_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a>]]</code> | ingress_security_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts">CoreDefaultSecurityListTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `manage_default_resource_id`<sup>Required</sup> <a name="manage_default_resource_id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.manageDefaultResourceId"></a>

```python
manage_default_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#manage_default_resource_id CoreDefaultSecurityList#manage_default_resource_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#compartment_id CoreDefaultSecurityList#compartment_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#defined_tags CoreDefaultSecurityList#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#display_name CoreDefaultSecurityList#display_name}.

---

##### `egress_security_rules`<sup>Optional</sup> <a name="egress_security_rules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.egressSecurityRules"></a>

```python
egress_security_rules: typing.Union[IResolvable, typing.List[CoreDefaultSecurityListEgressSecurityRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a>]]

egress_security_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#egress_security_rules CoreDefaultSecurityList#egress_security_rules}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#freeform_tags CoreDefaultSecurityList#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#id CoreDefaultSecurityList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress_security_rules`<sup>Optional</sup> <a name="ingress_security_rules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.ingressSecurityRules"></a>

```python
ingress_security_rules: typing.Union[IResolvable, typing.List[CoreDefaultSecurityListIngressSecurityRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a>]]

ingress_security_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#ingress_security_rules CoreDefaultSecurityList#ingress_security_rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.timeouts"></a>

```python
timeouts: CoreDefaultSecurityListTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts">CoreDefaultSecurityListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#timeouts CoreDefaultSecurityList#timeouts}

---

### CoreDefaultSecurityListEgressSecurityRules <a name="CoreDefaultSecurityListEgressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules(
  destination: str,
  protocol: str,
  description: str = None,
  destination_type: str = None,
  icmp_options: CoreDefaultSecurityListEgressSecurityRulesIcmpOptions = None,
  stateless: typing.Union[bool, IResolvable] = None,
  tcp_options: CoreDefaultSecurityListEgressSecurityRulesTcpOptions = None,
  udp_options: CoreDefaultSecurityListEgressSecurityRulesUdpOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#destination CoreDefaultSecurityList#destination}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#protocol CoreDefaultSecurityList#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#description CoreDefaultSecurityList#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.destinationType">destination_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#destination_type CoreDefaultSecurityList#destination_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.icmpOptions">icmp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions">CoreDefaultSecurityListEgressSecurityRulesIcmpOptions</a></code> | icmp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.stateless">stateless</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#stateless CoreDefaultSecurityList#stateless}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.tcpOptions">tcp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions">CoreDefaultSecurityListEgressSecurityRulesTcpOptions</a></code> | tcp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.udpOptions">udp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions">CoreDefaultSecurityListEgressSecurityRulesUdpOptions</a></code> | udp_options block. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#destination CoreDefaultSecurityList#destination}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#protocol CoreDefaultSecurityList#protocol}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#description CoreDefaultSecurityList#description}.

---

##### `destination_type`<sup>Optional</sup> <a name="destination_type" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#destination_type CoreDefaultSecurityList#destination_type}.

---

##### `icmp_options`<sup>Optional</sup> <a name="icmp_options" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.icmpOptions"></a>

```python
icmp_options: CoreDefaultSecurityListEgressSecurityRulesIcmpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions">CoreDefaultSecurityListEgressSecurityRulesIcmpOptions</a>

icmp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#icmp_options CoreDefaultSecurityList#icmp_options}

---

##### `stateless`<sup>Optional</sup> <a name="stateless" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.stateless"></a>

```python
stateless: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#stateless CoreDefaultSecurityList#stateless}.

---

##### `tcp_options`<sup>Optional</sup> <a name="tcp_options" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.tcpOptions"></a>

```python
tcp_options: CoreDefaultSecurityListEgressSecurityRulesTcpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions">CoreDefaultSecurityListEgressSecurityRulesTcpOptions</a>

tcp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#tcp_options CoreDefaultSecurityList#tcp_options}

---

##### `udp_options`<sup>Optional</sup> <a name="udp_options" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.udpOptions"></a>

```python
udp_options: CoreDefaultSecurityListEgressSecurityRulesUdpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions">CoreDefaultSecurityListEgressSecurityRulesUdpOptions</a>

udp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#udp_options CoreDefaultSecurityList#udp_options}

---

### CoreDefaultSecurityListEgressSecurityRulesIcmpOptions <a name="CoreDefaultSecurityListEgressSecurityRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions(
  type: typing.Union[int, float],
  code: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions.property.type">type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#type CoreDefaultSecurityList#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions.property.code">code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#code CoreDefaultSecurityList#code}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#type CoreDefaultSecurityList#type}.

---

##### `code`<sup>Optional</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#code CoreDefaultSecurityList#code}.

---

### CoreDefaultSecurityListEgressSecurityRulesTcpOptions <a name="CoreDefaultSecurityListEgressSecurityRulesTcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None,
  source_port_range: CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions.property.sourcePortRange">source_port_range</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `max`<sup>Optional</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

##### `source_port_range`<sup>Optional</sup> <a name="source_port_range" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions.property.sourcePortRange"></a>

```python
source_port_range: CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source_port_range CoreDefaultSecurityList#source_port_range}

---

### CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange <a name="CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange(
  max: typing.Union[int, float],
  min: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

### CoreDefaultSecurityListEgressSecurityRulesUdpOptions <a name="CoreDefaultSecurityListEgressSecurityRulesUdpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None,
  source_port_range: CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions.property.sourcePortRange">source_port_range</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `max`<sup>Optional</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

##### `source_port_range`<sup>Optional</sup> <a name="source_port_range" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions.property.sourcePortRange"></a>

```python
source_port_range: CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source_port_range CoreDefaultSecurityList#source_port_range}

---

### CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange <a name="CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange(
  max: typing.Union[int, float],
  min: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

### CoreDefaultSecurityListIngressSecurityRules <a name="CoreDefaultSecurityListIngressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules(
  protocol: str,
  source: str,
  description: str = None,
  icmp_options: CoreDefaultSecurityListIngressSecurityRulesIcmpOptions = None,
  source_type: str = None,
  stateless: typing.Union[bool, IResolvable] = None,
  tcp_options: CoreDefaultSecurityListIngressSecurityRulesTcpOptions = None,
  udp_options: CoreDefaultSecurityListIngressSecurityRulesUdpOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#protocol CoreDefaultSecurityList#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source CoreDefaultSecurityList#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#description CoreDefaultSecurityList#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.icmpOptions">icmp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions">CoreDefaultSecurityListIngressSecurityRulesIcmpOptions</a></code> | icmp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.sourceType">source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source_type CoreDefaultSecurityList#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.stateless">stateless</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#stateless CoreDefaultSecurityList#stateless}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.tcpOptions">tcp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions">CoreDefaultSecurityListIngressSecurityRulesTcpOptions</a></code> | tcp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.udpOptions">udp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions">CoreDefaultSecurityListIngressSecurityRulesUdpOptions</a></code> | udp_options block. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#protocol CoreDefaultSecurityList#protocol}.

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source CoreDefaultSecurityList#source}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#description CoreDefaultSecurityList#description}.

---

##### `icmp_options`<sup>Optional</sup> <a name="icmp_options" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.icmpOptions"></a>

```python
icmp_options: CoreDefaultSecurityListIngressSecurityRulesIcmpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions">CoreDefaultSecurityListIngressSecurityRulesIcmpOptions</a>

icmp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#icmp_options CoreDefaultSecurityList#icmp_options}

---

##### `source_type`<sup>Optional</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source_type CoreDefaultSecurityList#source_type}.

---

##### `stateless`<sup>Optional</sup> <a name="stateless" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.stateless"></a>

```python
stateless: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#stateless CoreDefaultSecurityList#stateless}.

---

##### `tcp_options`<sup>Optional</sup> <a name="tcp_options" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.tcpOptions"></a>

```python
tcp_options: CoreDefaultSecurityListIngressSecurityRulesTcpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions">CoreDefaultSecurityListIngressSecurityRulesTcpOptions</a>

tcp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#tcp_options CoreDefaultSecurityList#tcp_options}

---

##### `udp_options`<sup>Optional</sup> <a name="udp_options" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.udpOptions"></a>

```python
udp_options: CoreDefaultSecurityListIngressSecurityRulesUdpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions">CoreDefaultSecurityListIngressSecurityRulesUdpOptions</a>

udp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#udp_options CoreDefaultSecurityList#udp_options}

---

### CoreDefaultSecurityListIngressSecurityRulesIcmpOptions <a name="CoreDefaultSecurityListIngressSecurityRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions(
  type: typing.Union[int, float],
  code: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions.property.type">type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#type CoreDefaultSecurityList#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions.property.code">code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#code CoreDefaultSecurityList#code}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#type CoreDefaultSecurityList#type}.

---

##### `code`<sup>Optional</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#code CoreDefaultSecurityList#code}.

---

### CoreDefaultSecurityListIngressSecurityRulesTcpOptions <a name="CoreDefaultSecurityListIngressSecurityRulesTcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None,
  source_port_range: CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions.property.sourcePortRange">source_port_range</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `max`<sup>Optional</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

##### `source_port_range`<sup>Optional</sup> <a name="source_port_range" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions.property.sourcePortRange"></a>

```python
source_port_range: CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source_port_range CoreDefaultSecurityList#source_port_range}

---

### CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange <a name="CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange(
  max: typing.Union[int, float],
  min: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

### CoreDefaultSecurityListIngressSecurityRulesUdpOptions <a name="CoreDefaultSecurityListIngressSecurityRulesUdpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None,
  source_port_range: CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions.property.sourcePortRange">source_port_range</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `max`<sup>Optional</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

##### `source_port_range`<sup>Optional</sup> <a name="source_port_range" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions.property.sourcePortRange"></a>

```python
source_port_range: CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source_port_range CoreDefaultSecurityList#source_port_range}

---

### CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange <a name="CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange(
  max: typing.Union[int, float],
  min: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

### CoreDefaultSecurityListTimeouts <a name="CoreDefaultSecurityListTimeouts" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityListTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#create CoreDefaultSecurityList#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#delete CoreDefaultSecurityList#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#update CoreDefaultSecurityList#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#create CoreDefaultSecurityList#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#delete CoreDefaultSecurityList#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#update CoreDefaultSecurityList#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference <a name="CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resetCode">reset_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_code` <a name="reset_code" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resetCode"></a>

```python
def reset_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.codeInput">code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.typeInput">type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.type">type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions">CoreDefaultSecurityListEgressSecurityRulesIcmpOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.codeInput"></a>

```python
code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.typeInput"></a>

```python
type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.internalValue"></a>

```python
internal_value: CoreDefaultSecurityListEgressSecurityRulesIcmpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions">CoreDefaultSecurityListEgressSecurityRulesIcmpOptions</a>

---


### CoreDefaultSecurityListEgressSecurityRulesList <a name="CoreDefaultSecurityListEgressSecurityRulesList" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CoreDefaultSecurityListEgressSecurityRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CoreDefaultSecurityListEgressSecurityRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a>]]

---


### CoreDefaultSecurityListEgressSecurityRulesOutputReference <a name="CoreDefaultSecurityListEgressSecurityRulesOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putIcmpOptions">put_icmp_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putTcpOptions">put_tcp_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putUdpOptions">put_udp_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetDestinationType">reset_destination_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetIcmpOptions">reset_icmp_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetStateless">reset_stateless</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetTcpOptions">reset_tcp_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetUdpOptions">reset_udp_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_icmp_options` <a name="put_icmp_options" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putIcmpOptions"></a>

```python
def put_icmp_options(
  type: typing.Union[int, float],
  code: typing.Union[int, float] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putIcmpOptions.parameter.type"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#type CoreDefaultSecurityList#type}.

---

###### `code`<sup>Optional</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putIcmpOptions.parameter.code"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#code CoreDefaultSecurityList#code}.

---

##### `put_tcp_options` <a name="put_tcp_options" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putTcpOptions"></a>

```python
def put_tcp_options(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None,
  source_port_range: CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putTcpOptions.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putTcpOptions.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

###### `source_port_range`<sup>Optional</sup> <a name="source_port_range" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putTcpOptions.parameter.sourcePortRange"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source_port_range CoreDefaultSecurityList#source_port_range}

---

##### `put_udp_options` <a name="put_udp_options" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putUdpOptions"></a>

```python
def put_udp_options(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None,
  source_port_range: CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putUdpOptions.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putUdpOptions.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

###### `source_port_range`<sup>Optional</sup> <a name="source_port_range" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putUdpOptions.parameter.sourcePortRange"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source_port_range CoreDefaultSecurityList#source_port_range}

---

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_destination_type` <a name="reset_destination_type" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetDestinationType"></a>

```python
def reset_destination_type() -> None
```

##### `reset_icmp_options` <a name="reset_icmp_options" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetIcmpOptions"></a>

```python
def reset_icmp_options() -> None
```

##### `reset_stateless` <a name="reset_stateless" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetStateless"></a>

```python
def reset_stateless() -> None
```

##### `reset_tcp_options` <a name="reset_tcp_options" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetTcpOptions"></a>

```python
def reset_tcp_options() -> None
```

##### `reset_udp_options` <a name="reset_udp_options" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetUdpOptions"></a>

```python
def reset_udp_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.icmpOptions">icmp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference">CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.tcpOptions">tcp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.udpOptions">udp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destinationTypeInput">destination_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.icmpOptionsInput">icmp_options_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions">CoreDefaultSecurityListEgressSecurityRulesIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.statelessInput">stateless_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.tcpOptionsInput">tcp_options_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions">CoreDefaultSecurityListEgressSecurityRulesTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.udpOptionsInput">udp_options_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions">CoreDefaultSecurityListEgressSecurityRulesUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destinationType">destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.stateless">stateless</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `icmp_options`<sup>Required</sup> <a name="icmp_options" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.icmpOptions"></a>

```python
icmp_options: CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference">CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference</a>

---

##### `tcp_options`<sup>Required</sup> <a name="tcp_options" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.tcpOptions"></a>

```python
tcp_options: CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference</a>

---

##### `udp_options`<sup>Required</sup> <a name="udp_options" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.udpOptions"></a>

```python
udp_options: CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination_type_input`<sup>Optional</sup> <a name="destination_type_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destinationTypeInput"></a>

```python
destination_type_input: str
```

- *Type:* str

---

##### `icmp_options_input`<sup>Optional</sup> <a name="icmp_options_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.icmpOptionsInput"></a>

```python
icmp_options_input: CoreDefaultSecurityListEgressSecurityRulesIcmpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions">CoreDefaultSecurityListEgressSecurityRulesIcmpOptions</a>

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `stateless_input`<sup>Optional</sup> <a name="stateless_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.statelessInput"></a>

```python
stateless_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tcp_options_input`<sup>Optional</sup> <a name="tcp_options_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.tcpOptionsInput"></a>

```python
tcp_options_input: CoreDefaultSecurityListEgressSecurityRulesTcpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions">CoreDefaultSecurityListEgressSecurityRulesTcpOptions</a>

---

##### `udp_options_input`<sup>Optional</sup> <a name="udp_options_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.udpOptionsInput"></a>

```python
udp_options_input: CoreDefaultSecurityListEgressSecurityRulesUdpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions">CoreDefaultSecurityListEgressSecurityRulesUdpOptions</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `stateless`<sup>Required</sup> <a name="stateless" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.stateless"></a>

```python
stateless: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreDefaultSecurityListEgressSecurityRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a>]

---


### CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference <a name="CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.putSourcePortRange">put_source_port_range</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetMin">reset_min</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetSourcePortRange">reset_source_port_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_source_port_range` <a name="put_source_port_range" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.putSourcePortRange"></a>

```python
def put_source_port_range(
  max: typing.Union[int, float],
  min: typing.Union[int, float]
) -> None
```

###### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.putSourcePortRange.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

###### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.putSourcePortRange.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

##### `reset_max` <a name="reset_max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetMin"></a>

```python
def reset_min() -> None
```

##### `reset_source_port_range` <a name="reset_source_port_range" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetSourcePortRange"></a>

```python
def reset_source_port_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange">source_port_range</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRangeInput">source_port_range_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions">CoreDefaultSecurityListEgressSecurityRulesTcpOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_port_range`<sup>Required</sup> <a name="source_port_range" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```python
source_port_range: CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference</a>

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_port_range_input`<sup>Optional</sup> <a name="source_port_range_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRangeInput"></a>

```python
source_port_range_input: CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a>

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.internalValue"></a>

```python
internal_value: CoreDefaultSecurityListEgressSecurityRulesTcpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions">CoreDefaultSecurityListEgressSecurityRulesTcpOptions</a>

---


### CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference <a name="CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```python
internal_value: CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a>

---


### CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference <a name="CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.putSourcePortRange">put_source_port_range</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetMin">reset_min</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetSourcePortRange">reset_source_port_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_source_port_range` <a name="put_source_port_range" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.putSourcePortRange"></a>

```python
def put_source_port_range(
  max: typing.Union[int, float],
  min: typing.Union[int, float]
) -> None
```

###### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.putSourcePortRange.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

###### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.putSourcePortRange.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

##### `reset_max` <a name="reset_max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetMin"></a>

```python
def reset_min() -> None
```

##### `reset_source_port_range` <a name="reset_source_port_range" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetSourcePortRange"></a>

```python
def reset_source_port_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange">source_port_range</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRangeInput">source_port_range_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions">CoreDefaultSecurityListEgressSecurityRulesUdpOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_port_range`<sup>Required</sup> <a name="source_port_range" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```python
source_port_range: CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference</a>

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_port_range_input`<sup>Optional</sup> <a name="source_port_range_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRangeInput"></a>

```python
source_port_range_input: CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a>

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.internalValue"></a>

```python
internal_value: CoreDefaultSecurityListEgressSecurityRulesUdpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions">CoreDefaultSecurityListEgressSecurityRulesUdpOptions</a>

---


### CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference <a name="CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```python
internal_value: CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a>

---


### CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference <a name="CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resetCode">reset_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_code` <a name="reset_code" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resetCode"></a>

```python
def reset_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.codeInput">code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.typeInput">type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.type">type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions">CoreDefaultSecurityListIngressSecurityRulesIcmpOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.codeInput"></a>

```python
code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.typeInput"></a>

```python
type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.internalValue"></a>

```python
internal_value: CoreDefaultSecurityListIngressSecurityRulesIcmpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions">CoreDefaultSecurityListIngressSecurityRulesIcmpOptions</a>

---


### CoreDefaultSecurityListIngressSecurityRulesList <a name="CoreDefaultSecurityListIngressSecurityRulesList" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CoreDefaultSecurityListIngressSecurityRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CoreDefaultSecurityListIngressSecurityRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a>]]

---


### CoreDefaultSecurityListIngressSecurityRulesOutputReference <a name="CoreDefaultSecurityListIngressSecurityRulesOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putIcmpOptions">put_icmp_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putTcpOptions">put_tcp_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putUdpOptions">put_udp_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetIcmpOptions">reset_icmp_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetSourceType">reset_source_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetStateless">reset_stateless</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetTcpOptions">reset_tcp_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetUdpOptions">reset_udp_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_icmp_options` <a name="put_icmp_options" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putIcmpOptions"></a>

```python
def put_icmp_options(
  type: typing.Union[int, float],
  code: typing.Union[int, float] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putIcmpOptions.parameter.type"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#type CoreDefaultSecurityList#type}.

---

###### `code`<sup>Optional</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putIcmpOptions.parameter.code"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#code CoreDefaultSecurityList#code}.

---

##### `put_tcp_options` <a name="put_tcp_options" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putTcpOptions"></a>

```python
def put_tcp_options(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None,
  source_port_range: CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putTcpOptions.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putTcpOptions.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

###### `source_port_range`<sup>Optional</sup> <a name="source_port_range" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putTcpOptions.parameter.sourcePortRange"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source_port_range CoreDefaultSecurityList#source_port_range}

---

##### `put_udp_options` <a name="put_udp_options" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putUdpOptions"></a>

```python
def put_udp_options(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None,
  source_port_range: CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putUdpOptions.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putUdpOptions.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

###### `source_port_range`<sup>Optional</sup> <a name="source_port_range" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putUdpOptions.parameter.sourcePortRange"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source_port_range CoreDefaultSecurityList#source_port_range}

---

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_icmp_options` <a name="reset_icmp_options" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetIcmpOptions"></a>

```python
def reset_icmp_options() -> None
```

##### `reset_source_type` <a name="reset_source_type" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetSourceType"></a>

```python
def reset_source_type() -> None
```

##### `reset_stateless` <a name="reset_stateless" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetStateless"></a>

```python
def reset_stateless() -> None
```

##### `reset_tcp_options` <a name="reset_tcp_options" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetTcpOptions"></a>

```python
def reset_tcp_options() -> None
```

##### `reset_udp_options` <a name="reset_udp_options" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetUdpOptions"></a>

```python
def reset_udp_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.icmpOptions">icmp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference">CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.tcpOptions">tcp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.udpOptions">udp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.icmpOptionsInput">icmp_options_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions">CoreDefaultSecurityListIngressSecurityRulesIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.sourceTypeInput">source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.statelessInput">stateless_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.tcpOptionsInput">tcp_options_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions">CoreDefaultSecurityListIngressSecurityRulesTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.udpOptionsInput">udp_options_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions">CoreDefaultSecurityListIngressSecurityRulesUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.stateless">stateless</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `icmp_options`<sup>Required</sup> <a name="icmp_options" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.icmpOptions"></a>

```python
icmp_options: CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference">CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference</a>

---

##### `tcp_options`<sup>Required</sup> <a name="tcp_options" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.tcpOptions"></a>

```python
tcp_options: CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference</a>

---

##### `udp_options`<sup>Required</sup> <a name="udp_options" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.udpOptions"></a>

```python
udp_options: CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `icmp_options_input`<sup>Optional</sup> <a name="icmp_options_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.icmpOptionsInput"></a>

```python
icmp_options_input: CoreDefaultSecurityListIngressSecurityRulesIcmpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions">CoreDefaultSecurityListIngressSecurityRulesIcmpOptions</a>

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `source_type_input`<sup>Optional</sup> <a name="source_type_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.sourceTypeInput"></a>

```python
source_type_input: str
```

- *Type:* str

---

##### `stateless_input`<sup>Optional</sup> <a name="stateless_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.statelessInput"></a>

```python
stateless_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tcp_options_input`<sup>Optional</sup> <a name="tcp_options_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.tcpOptionsInput"></a>

```python
tcp_options_input: CoreDefaultSecurityListIngressSecurityRulesTcpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions">CoreDefaultSecurityListIngressSecurityRulesTcpOptions</a>

---

##### `udp_options_input`<sup>Optional</sup> <a name="udp_options_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.udpOptionsInput"></a>

```python
udp_options_input: CoreDefaultSecurityListIngressSecurityRulesUdpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions">CoreDefaultSecurityListIngressSecurityRulesUdpOptions</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `stateless`<sup>Required</sup> <a name="stateless" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.stateless"></a>

```python
stateless: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreDefaultSecurityListIngressSecurityRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a>]

---


### CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference <a name="CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.putSourcePortRange">put_source_port_range</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetMin">reset_min</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetSourcePortRange">reset_source_port_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_source_port_range` <a name="put_source_port_range" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.putSourcePortRange"></a>

```python
def put_source_port_range(
  max: typing.Union[int, float],
  min: typing.Union[int, float]
) -> None
```

###### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.putSourcePortRange.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

###### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.putSourcePortRange.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

##### `reset_max` <a name="reset_max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetMin"></a>

```python
def reset_min() -> None
```

##### `reset_source_port_range` <a name="reset_source_port_range" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetSourcePortRange"></a>

```python
def reset_source_port_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange">source_port_range</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRangeInput">source_port_range_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions">CoreDefaultSecurityListIngressSecurityRulesTcpOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_port_range`<sup>Required</sup> <a name="source_port_range" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```python
source_port_range: CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference</a>

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_port_range_input`<sup>Optional</sup> <a name="source_port_range_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRangeInput"></a>

```python
source_port_range_input: CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a>

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.internalValue"></a>

```python
internal_value: CoreDefaultSecurityListIngressSecurityRulesTcpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions">CoreDefaultSecurityListIngressSecurityRulesTcpOptions</a>

---


### CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference <a name="CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```python
internal_value: CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a>

---


### CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference <a name="CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.putSourcePortRange">put_source_port_range</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetMin">reset_min</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetSourcePortRange">reset_source_port_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_source_port_range` <a name="put_source_port_range" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.putSourcePortRange"></a>

```python
def put_source_port_range(
  max: typing.Union[int, float],
  min: typing.Union[int, float]
) -> None
```

###### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.putSourcePortRange.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

###### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.putSourcePortRange.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

##### `reset_max` <a name="reset_max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetMin"></a>

```python
def reset_min() -> None
```

##### `reset_source_port_range` <a name="reset_source_port_range" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetSourcePortRange"></a>

```python
def reset_source_port_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange">source_port_range</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRangeInput">source_port_range_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions">CoreDefaultSecurityListIngressSecurityRulesUdpOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_port_range`<sup>Required</sup> <a name="source_port_range" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```python
source_port_range: CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference</a>

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_port_range_input`<sup>Optional</sup> <a name="source_port_range_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRangeInput"></a>

```python
source_port_range_input: CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a>

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.internalValue"></a>

```python
internal_value: CoreDefaultSecurityListIngressSecurityRulesUdpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions">CoreDefaultSecurityListIngressSecurityRulesUdpOptions</a>

---


### CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference <a name="CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```python
internal_value: CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a>

---


### CoreDefaultSecurityListTimeoutsOutputReference <a name="CoreDefaultSecurityListTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_default_security_list

coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts">CoreDefaultSecurityListTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreDefaultSecurityListTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts">CoreDefaultSecurityListTimeouts</a>]

---



