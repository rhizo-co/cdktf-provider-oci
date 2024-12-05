# `dataOciMeteringComputationUsageStatementEmailRecipientsGroups` Submodule <a name="`dataOciMeteringComputationUsageStatementEmailRecipientsGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMeteringComputationUsageStatementEmailRecipientsGroups <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroups" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups oci_metering_computation_usage_statement_email_recipients_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_statement_email_recipients_groups

dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups(
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
  subscription_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#compartment_id DataOciMeteringComputationUsageStatementEmailRecipientsGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#subscription_id DataOciMeteringComputationUsageStatementEmailRecipientsGroups#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#id DataOciMeteringComputationUsageStatementEmailRecipientsGroups#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#compartment_id DataOciMeteringComputationUsageStatementEmailRecipientsGroups#compartment_id}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#subscription_id DataOciMeteringComputationUsageStatementEmailRecipientsGroups#subscription_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#filter DataOciMeteringComputationUsageStatementEmailRecipientsGroups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#id DataOciMeteringComputationUsageStatementEmailRecipientsGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciMeteringComputationUsageStatementEmailRecipientsGroups resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_statement_email_recipients_groups

dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_statement_email_recipients_groups

dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_statement_email_recipients_groups

dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_statement_email_recipients_groups

dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciMeteringComputationUsageStatementEmailRecipientsGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciMeteringComputationUsageStatementEmailRecipientsGroups to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciMeteringComputationUsageStatementEmailRecipientsGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMeteringComputationUsageStatementEmailRecipientsGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.emailRecipientsGroupCollection">email_recipients_group_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `email_recipients_group_collection`<sup>Required</sup> <a name="email_recipients_group_collection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.emailRecipientsGroupCollection"></a>

```python
email_recipients_group_collection: DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.filter"></a>

```python
filter: DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_statement_email_recipients_groups

dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  subscription_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#compartment_id DataOciMeteringComputationUsageStatementEmailRecipientsGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#subscription_id DataOciMeteringComputationUsageStatementEmailRecipientsGroups#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#id DataOciMeteringComputationUsageStatementEmailRecipientsGroups#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#compartment_id DataOciMeteringComputationUsageStatementEmailRecipientsGroups#compartment_id}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#subscription_id DataOciMeteringComputationUsageStatementEmailRecipientsGroups#subscription_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#filter DataOciMeteringComputationUsageStatementEmailRecipientsGroups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#id DataOciMeteringComputationUsageStatementEmailRecipientsGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollection <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_statement_email_recipients_groups

dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollection()
```


### DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItems <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_statement_email_recipients_groups

dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItems()
```


### DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStruct <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStruct" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_statement_email_recipients_groups

dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStruct()
```


### DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_statement_email_recipients_groups

dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#name DataOciMeteringComputationUsageStatementEmailRecipientsGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#values DataOciMeteringComputationUsageStatementEmailRecipientsGroups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#regex DataOciMeteringComputationUsageStatementEmailRecipientsGroups#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#name DataOciMeteringComputationUsageStatementEmailRecipientsGroups#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#values DataOciMeteringComputationUsageStatementEmailRecipientsGroups#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#regex DataOciMeteringComputationUsageStatementEmailRecipientsGroups#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_statement_email_recipients_groups

dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_statement_email_recipients_groups

dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.emailRecipientsGroupId">email_recipients_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.recipientsList">recipients_list</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItems">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `email_recipients_group_id`<sup>Required</sup> <a name="email_recipients_group_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.emailRecipientsGroupId"></a>

```python
email_recipients_group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `recipients_list`<sup>Required</sup> <a name="recipients_list" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.recipientsList"></a>

```python
recipients_list: DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItems">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItems</a>

---


### DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_statement_email_recipients_groups

dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_statement_email_recipients_groups

dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.property.emailId">email_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStruct">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_id`<sup>Required</sup> <a name="email_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.property.emailId"></a>

```python
email_id: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStruct">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStruct</a>

---


### DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_statement_email_recipients_groups

dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_statement_email_recipients_groups

dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollection">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.property.items"></a>

```python
items: DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollection">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollection</a>

---


### DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_statement_email_recipients_groups

dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter</a>]]

---


### DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_statement_email_recipients_groups

dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter</a>]

---



