# `dataOciFleetAppsManagementFleetComplianceReport` Submodule <a name="`dataOciFleetAppsManagementFleetComplianceReport` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementFleetComplianceReport <a name="DataOciFleetAppsManagementFleetComplianceReport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report oci_fleet_apps_management_fleet_compliance_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_compliance_report

dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compliance_report_id: str,
  fleet_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.complianceReportId">compliance_report_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#compliance_report_id DataOciFleetAppsManagementFleetComplianceReport#compliance_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#fleet_id DataOciFleetAppsManagementFleetComplianceReport#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#id DataOciFleetAppsManagementFleetComplianceReport#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compliance_report_id`<sup>Required</sup> <a name="compliance_report_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.complianceReportId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#compliance_report_id DataOciFleetAppsManagementFleetComplianceReport#compliance_report_id}.

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.fleetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#fleet_id DataOciFleetAppsManagementFleetComplianceReport#fleet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#id DataOciFleetAppsManagementFleetComplianceReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementFleetComplianceReport resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_compliance_report

dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_compliance_report

dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_compliance_report

dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_compliance_report

dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciFleetAppsManagementFleetComplianceReport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciFleetAppsManagementFleetComplianceReport to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciFleetAppsManagementFleetComplianceReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementFleetComplianceReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.complianceState">compliance_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.resources">resources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList">DataOciFleetAppsManagementFleetComplianceReportResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.complianceReportIdInput">compliance_report_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.fleetIdInput">fleet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.complianceReportId">compliance_report_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.fleetId">fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compliance_state`<sup>Required</sup> <a name="compliance_state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.complianceState"></a>

```python
compliance_state: str
```

- *Type:* str

---

##### `resources`<sup>Required</sup> <a name="resources" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.resources"></a>

```python
resources: DataOciFleetAppsManagementFleetComplianceReportResourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList">DataOciFleetAppsManagementFleetComplianceReportResourcesList</a>

---

##### `compliance_report_id_input`<sup>Optional</sup> <a name="compliance_report_id_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.complianceReportIdInput"></a>

```python
compliance_report_id_input: str
```

- *Type:* str

---

##### `fleet_id_input`<sup>Optional</sup> <a name="fleet_id_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.fleetIdInput"></a>

```python
fleet_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `compliance_report_id`<sup>Required</sup> <a name="compliance_report_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.complianceReportId"></a>

```python
compliance_report_id: str
```

- *Type:* str

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementFleetComplianceReportConfig <a name="DataOciFleetAppsManagementFleetComplianceReportConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_compliance_report

dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compliance_report_id: str,
  fleet_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.complianceReportId">compliance_report_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#compliance_report_id DataOciFleetAppsManagementFleetComplianceReport#compliance_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#fleet_id DataOciFleetAppsManagementFleetComplianceReport#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#id DataOciFleetAppsManagementFleetComplianceReport#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compliance_report_id`<sup>Required</sup> <a name="compliance_report_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.complianceReportId"></a>

```python
compliance_report_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#compliance_report_id DataOciFleetAppsManagementFleetComplianceReport#compliance_report_id}.

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#fleet_id DataOciFleetAppsManagementFleetComplianceReport#fleet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#id DataOciFleetAppsManagementFleetComplianceReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciFleetAppsManagementFleetComplianceReportResources <a name="DataOciFleetAppsManagementFleetComplianceReportResources" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_compliance_report

dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResources()
```


### DataOciFleetAppsManagementFleetComplianceReportResourcesProducts <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProducts" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProducts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProducts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_compliance_report

dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProducts()
```


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_compliance_report

dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets()
```


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_compliance_report

dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches()
```


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_compliance_report

dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementFleetComplianceReportResourcesList <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_compliance_report

dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_compliance_report

dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.compartment">compartment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.complianceState">compliance_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.products">products</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceRegion">resource_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.tenancyId">tenancy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.tenancyName">tenancy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResources">DataOciFleetAppsManagementFleetComplianceReportResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment`<sup>Required</sup> <a name="compartment" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.compartment"></a>

```python
compartment: str
```

- *Type:* str

---

##### `compliance_state`<sup>Required</sup> <a name="compliance_state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.complianceState"></a>

```python
compliance_state: str
```

- *Type:* str

---

##### `products`<sup>Required</sup> <a name="products" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.products"></a>

```python
products: DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList</a>

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `resource_region`<sup>Required</sup> <a name="resource_region" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceRegion"></a>

```python
resource_region: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

---

##### `tenancy_name`<sup>Required</sup> <a name="tenancy_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.tenancyName"></a>

```python
tenancy_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementFleetComplianceReportResources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResources">DataOciFleetAppsManagementFleetComplianceReportResources</a>

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_compliance_report

dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_compliance_report

dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.productName">product_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.targets">targets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProducts">DataOciFleetAppsManagementFleetComplianceReportResourcesProducts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `product_name`<sup>Required</sup> <a name="product_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.productName"></a>

```python
product_name: str
```

- *Type:* str

---

##### `targets`<sup>Required</sup> <a name="targets" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.targets"></a>

```python
targets: DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementFleetComplianceReportResourcesProducts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProducts">DataOciFleetAppsManagementFleetComplianceReportResourcesProducts</a>

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_compliance_report

dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_compliance_report

dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.patchDescription">patch_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.patchName">patch_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.patchType">patch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.timeApplied">time_applied</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.timeReleased">time_released</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `patch_description`<sup>Required</sup> <a name="patch_description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.patchDescription"></a>

```python
patch_description: str
```

- *Type:* str

---

##### `patch_name`<sup>Required</sup> <a name="patch_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.patchName"></a>

```python
patch_name: str
```

- *Type:* str

---

##### `patch_type`<sup>Required</sup> <a name="patch_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.patchType"></a>

```python
patch_type: str
```

- *Type:* str

---

##### `time_applied`<sup>Required</sup> <a name="time_applied" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.timeApplied"></a>

```python
time_applied: str
```

- *Type:* str

---

##### `time_released`<sup>Required</sup> <a name="time_released" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.timeReleased"></a>

```python
time_released: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches</a>

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_compliance_report

dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_compliance_report

dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.complianceState">compliance_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.installedPatches">installed_patches</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.recommendedPatches">recommended_patches</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.targetName">target_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compliance_state`<sup>Required</sup> <a name="compliance_state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.complianceState"></a>

```python
compliance_state: str
```

- *Type:* str

---

##### `installed_patches`<sup>Required</sup> <a name="installed_patches" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.installedPatches"></a>

```python
installed_patches: DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList</a>

---

##### `recommended_patches`<sup>Required</sup> <a name="recommended_patches" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.recommendedPatches"></a>

```python
recommended_patches: DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList</a>

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `target_name`<sup>Required</sup> <a name="target_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.targetName"></a>

```python
target_name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets</a>

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_compliance_report

dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_compliance_report

dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.patchDescription">patch_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.patchName">patch_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.patchType">patch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.timeApplied">time_applied</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.timeReleased">time_released</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `patch_description`<sup>Required</sup> <a name="patch_description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.patchDescription"></a>

```python
patch_description: str
```

- *Type:* str

---

##### `patch_name`<sup>Required</sup> <a name="patch_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.patchName"></a>

```python
patch_name: str
```

- *Type:* str

---

##### `patch_type`<sup>Required</sup> <a name="patch_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.patchType"></a>

```python
patch_type: str
```

- *Type:* str

---

##### `time_applied`<sup>Required</sup> <a name="time_applied" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.timeApplied"></a>

```python
time_applied: str
```

- *Type:* str

---

##### `time_released`<sup>Required</sup> <a name="time_released" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.timeReleased"></a>

```python
time_released: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches</a>

---



