# `dataOciDataSafeTargetAlertPolicyAssociations` Submodule <a name="`dataOciDataSafeTargetAlertPolicyAssociations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeTargetAlertPolicyAssociations <a name="DataOciDataSafeTargetAlertPolicyAssociations" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations oci_data_safe_target_alert_policy_associations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_alert_policy_associations

dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations(
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
  access_level: str = None,
  alert_policy_id: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetAlertPolicyAssociationsFilter]] = None,
  id: str = None,
  state: str = None,
  target_alert_policy_association_id: str = None,
  target_id: str = None,
  time_created_greater_than_or_equal_to: str = None,
  time_created_less_than: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#compartment_id DataOciDataSafeTargetAlertPolicyAssociations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#access_level DataOciDataSafeTargetAlertPolicyAssociations#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.alertPolicyId">alert_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#alert_policy_id DataOciDataSafeTargetAlertPolicyAssociations#alert_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#compartment_id_in_subtree DataOciDataSafeTargetAlertPolicyAssociations#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter">DataOciDataSafeTargetAlertPolicyAssociationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#id DataOciDataSafeTargetAlertPolicyAssociations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#state DataOciDataSafeTargetAlertPolicyAssociations#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.targetAlertPolicyAssociationId">target_alert_policy_association_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#target_alert_policy_association_id DataOciDataSafeTargetAlertPolicyAssociations#target_alert_policy_association_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#target_id DataOciDataSafeTargetAlertPolicyAssociations#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.timeCreatedGreaterThanOrEqualTo">time_created_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#time_created_greater_than_or_equal_to DataOciDataSafeTargetAlertPolicyAssociations#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.timeCreatedLessThan">time_created_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#time_created_less_than DataOciDataSafeTargetAlertPolicyAssociations#time_created_less_than}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#compartment_id DataOciDataSafeTargetAlertPolicyAssociations#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.accessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#access_level DataOciDataSafeTargetAlertPolicyAssociations#access_level}.

---

##### `alert_policy_id`<sup>Optional</sup> <a name="alert_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.alertPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#alert_policy_id DataOciDataSafeTargetAlertPolicyAssociations#alert_policy_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#compartment_id_in_subtree DataOciDataSafeTargetAlertPolicyAssociations#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter">DataOciDataSafeTargetAlertPolicyAssociationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#filter DataOciDataSafeTargetAlertPolicyAssociations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#id DataOciDataSafeTargetAlertPolicyAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#state DataOciDataSafeTargetAlertPolicyAssociations#state}.

---

##### `target_alert_policy_association_id`<sup>Optional</sup> <a name="target_alert_policy_association_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.targetAlertPolicyAssociationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#target_alert_policy_association_id DataOciDataSafeTargetAlertPolicyAssociations#target_alert_policy_association_id}.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.targetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#target_id DataOciDataSafeTargetAlertPolicyAssociations#target_id}.

---

##### `time_created_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.timeCreatedGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#time_created_greater_than_or_equal_to DataOciDataSafeTargetAlertPolicyAssociations#time_created_greater_than_or_equal_to}.

---

##### `time_created_less_than`<sup>Optional</sup> <a name="time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.timeCreatedLessThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#time_created_less_than DataOciDataSafeTargetAlertPolicyAssociations#time_created_less_than}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetAlertPolicyId">reset_alert_policy_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetTargetAlertPolicyAssociationId">reset_target_alert_policy_association_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetTargetId">reset_target_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetTimeCreatedGreaterThanOrEqualTo">reset_time_created_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetTimeCreatedLessThan">reset_time_created_less_than</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetAlertPolicyAssociationsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter">DataOciDataSafeTargetAlertPolicyAssociationsFilter</a>]]

---

##### `reset_access_level` <a name="reset_access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_alert_policy_id` <a name="reset_alert_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetAlertPolicyId"></a>

```python
def reset_alert_policy_id() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_target_alert_policy_association_id` <a name="reset_target_alert_policy_association_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetTargetAlertPolicyAssociationId"></a>

```python
def reset_target_alert_policy_association_id() -> None
```

##### `reset_target_id` <a name="reset_target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetTargetId"></a>

```python
def reset_target_id() -> None
```

##### `reset_time_created_greater_than_or_equal_to` <a name="reset_time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetTimeCreatedGreaterThanOrEqualTo"></a>

```python
def reset_time_created_greater_than_or_equal_to() -> None
```

##### `reset_time_created_less_than` <a name="reset_time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetTimeCreatedLessThan"></a>

```python
def reset_time_created_less_than() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeTargetAlertPolicyAssociations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_alert_policy_associations

dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_alert_policy_associations

dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_alert_policy_associations

dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_alert_policy_associations

dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeTargetAlertPolicyAssociations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeTargetAlertPolicyAssociations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeTargetAlertPolicyAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeTargetAlertPolicyAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList">DataOciDataSafeTargetAlertPolicyAssociationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetAlertPolicyAssociationCollection">target_alert_policy_association_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList">DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.alertPolicyIdInput">alert_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter">DataOciDataSafeTargetAlertPolicyAssociationsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetAlertPolicyAssociationIdInput">target_alert_policy_association_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetIdInput">target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.timeCreatedGreaterThanOrEqualToInput">time_created_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.timeCreatedLessThanInput">time_created_less_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.alertPolicyId">alert_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetAlertPolicyAssociationId">target_alert_policy_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.timeCreatedGreaterThanOrEqualTo">time_created_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.timeCreatedLessThan">time_created_less_than</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.filter"></a>

```python
filter: DataOciDataSafeTargetAlertPolicyAssociationsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList">DataOciDataSafeTargetAlertPolicyAssociationsFilterList</a>

---

##### `target_alert_policy_association_collection`<sup>Required</sup> <a name="target_alert_policy_association_collection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetAlertPolicyAssociationCollection"></a>

```python
target_alert_policy_association_collection: DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList">DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `alert_policy_id_input`<sup>Optional</sup> <a name="alert_policy_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.alertPolicyIdInput"></a>

```python
alert_policy_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetAlertPolicyAssociationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter">DataOciDataSafeTargetAlertPolicyAssociationsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `target_alert_policy_association_id_input`<sup>Optional</sup> <a name="target_alert_policy_association_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetAlertPolicyAssociationIdInput"></a>

```python
target_alert_policy_association_id_input: str
```

- *Type:* str

---

##### `target_id_input`<sup>Optional</sup> <a name="target_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetIdInput"></a>

```python
target_id_input: str
```

- *Type:* str

---

##### `time_created_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="time_created_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.timeCreatedGreaterThanOrEqualToInput"></a>

```python
time_created_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `time_created_less_than_input`<sup>Optional</sup> <a name="time_created_less_than_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.timeCreatedLessThanInput"></a>

```python
time_created_less_than_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `alert_policy_id`<sup>Required</sup> <a name="alert_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.alertPolicyId"></a>

```python
alert_policy_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `target_alert_policy_association_id`<sup>Required</sup> <a name="target_alert_policy_association_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetAlertPolicyAssociationId"></a>

```python
target_alert_policy_association_id: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `time_created_greater_than_or_equal_to`<sup>Required</sup> <a name="time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.timeCreatedGreaterThanOrEqualTo"></a>

```python
time_created_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `time_created_less_than`<sup>Required</sup> <a name="time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.timeCreatedLessThan"></a>

```python
time_created_less_than: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeTargetAlertPolicyAssociationsConfig <a name="DataOciDataSafeTargetAlertPolicyAssociationsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_alert_policy_associations

dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  access_level: str = None,
  alert_policy_id: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetAlertPolicyAssociationsFilter]] = None,
  id: str = None,
  state: str = None,
  target_alert_policy_association_id: str = None,
  target_id: str = None,
  time_created_greater_than_or_equal_to: str = None,
  time_created_less_than: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#compartment_id DataOciDataSafeTargetAlertPolicyAssociations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#access_level DataOciDataSafeTargetAlertPolicyAssociations#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.alertPolicyId">alert_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#alert_policy_id DataOciDataSafeTargetAlertPolicyAssociations#alert_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#compartment_id_in_subtree DataOciDataSafeTargetAlertPolicyAssociations#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter">DataOciDataSafeTargetAlertPolicyAssociationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#id DataOciDataSafeTargetAlertPolicyAssociations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#state DataOciDataSafeTargetAlertPolicyAssociations#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.targetAlertPolicyAssociationId">target_alert_policy_association_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#target_alert_policy_association_id DataOciDataSafeTargetAlertPolicyAssociations#target_alert_policy_association_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#target_id DataOciDataSafeTargetAlertPolicyAssociations#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.timeCreatedGreaterThanOrEqualTo">time_created_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#time_created_greater_than_or_equal_to DataOciDataSafeTargetAlertPolicyAssociations#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.timeCreatedLessThan">time_created_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#time_created_less_than DataOciDataSafeTargetAlertPolicyAssociations#time_created_less_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#compartment_id DataOciDataSafeTargetAlertPolicyAssociations#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#access_level DataOciDataSafeTargetAlertPolicyAssociations#access_level}.

---

##### `alert_policy_id`<sup>Optional</sup> <a name="alert_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.alertPolicyId"></a>

```python
alert_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#alert_policy_id DataOciDataSafeTargetAlertPolicyAssociations#alert_policy_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#compartment_id_in_subtree DataOciDataSafeTargetAlertPolicyAssociations#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetAlertPolicyAssociationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter">DataOciDataSafeTargetAlertPolicyAssociationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#filter DataOciDataSafeTargetAlertPolicyAssociations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#id DataOciDataSafeTargetAlertPolicyAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#state DataOciDataSafeTargetAlertPolicyAssociations#state}.

---

##### `target_alert_policy_association_id`<sup>Optional</sup> <a name="target_alert_policy_association_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.targetAlertPolicyAssociationId"></a>

```python
target_alert_policy_association_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#target_alert_policy_association_id DataOciDataSafeTargetAlertPolicyAssociations#target_alert_policy_association_id}.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#target_id DataOciDataSafeTargetAlertPolicyAssociations#target_id}.

---

##### `time_created_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```python
time_created_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#time_created_greater_than_or_equal_to DataOciDataSafeTargetAlertPolicyAssociations#time_created_greater_than_or_equal_to}.

---

##### `time_created_less_than`<sup>Optional</sup> <a name="time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.timeCreatedLessThan"></a>

```python
time_created_less_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#time_created_less_than DataOciDataSafeTargetAlertPolicyAssociations#time_created_less_than}.

---

### DataOciDataSafeTargetAlertPolicyAssociationsFilter <a name="DataOciDataSafeTargetAlertPolicyAssociationsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_alert_policy_associations

dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#name DataOciDataSafeTargetAlertPolicyAssociations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#values DataOciDataSafeTargetAlertPolicyAssociations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#regex DataOciDataSafeTargetAlertPolicyAssociations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#name DataOciDataSafeTargetAlertPolicyAssociations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#values DataOciDataSafeTargetAlertPolicyAssociations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#regex DataOciDataSafeTargetAlertPolicyAssociations#regex}.

---

### DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection <a name="DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_alert_policy_associations

dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection()
```


### DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems <a name="DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_alert_policy_associations

dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeTargetAlertPolicyAssociationsFilterList <a name="DataOciDataSafeTargetAlertPolicyAssociationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_alert_policy_associations

dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter">DataOciDataSafeTargetAlertPolicyAssociationsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetAlertPolicyAssociationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter">DataOciDataSafeTargetAlertPolicyAssociationsFilter</a>]]

---


### DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference <a name="DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_alert_policy_associations

dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter">DataOciDataSafeTargetAlertPolicyAssociationsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeTargetAlertPolicyAssociationsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter">DataOciDataSafeTargetAlertPolicyAssociationsFilter</a>]

---


### DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList <a name="DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_alert_policy_associations

dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference <a name="DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_alert_policy_associations

dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems">DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems">DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems</a>

---


### DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList <a name="DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_alert_policy_associations

dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference <a name="DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_alert_policy_associations

dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList">DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection">DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.property.items"></a>

```python
items: DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList">DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection">DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection</a>

---



