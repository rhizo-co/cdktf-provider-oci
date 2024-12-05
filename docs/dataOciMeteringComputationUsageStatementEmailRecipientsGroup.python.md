# `dataOciMeteringComputationUsageStatementEmailRecipientsGroup` Submodule <a name="`dataOciMeteringComputationUsageStatementEmailRecipientsGroup` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMeteringComputationUsageStatementEmailRecipientsGroup <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroup" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_group oci_metering_computation_usage_statement_email_recipients_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_statement_email_recipients_group

dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup(
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
  email_recipients_group_id: str,
  subscription_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_group#compartment_id DataOciMeteringComputationUsageStatementEmailRecipientsGroup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.emailRecipientsGroupId">email_recipients_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_group#email_recipients_group_id DataOciMeteringComputationUsageStatementEmailRecipientsGroup#email_recipients_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_group#subscription_id DataOciMeteringComputationUsageStatementEmailRecipientsGroup#subscription_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_group#compartment_id DataOciMeteringComputationUsageStatementEmailRecipientsGroup#compartment_id}.

---

##### `email_recipients_group_id`<sup>Required</sup> <a name="email_recipients_group_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.emailRecipientsGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_group#email_recipients_group_id DataOciMeteringComputationUsageStatementEmailRecipientsGroup#email_recipients_group_id}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_group#subscription_id DataOciMeteringComputationUsageStatementEmailRecipientsGroup#subscription_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciMeteringComputationUsageStatementEmailRecipientsGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_statement_email_recipients_group

dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_statement_email_recipients_group

dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_statement_email_recipients_group

dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_statement_email_recipients_group

dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciMeteringComputationUsageStatementEmailRecipientsGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciMeteringComputationUsageStatementEmailRecipientsGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciMeteringComputationUsageStatementEmailRecipientsGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMeteringComputationUsageStatementEmailRecipientsGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.recipientsList">recipients_list</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList">DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.emailRecipientsGroupIdInput">email_recipients_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.emailRecipientsGroupId">email_recipients_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `recipients_list`<sup>Required</sup> <a name="recipients_list" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.recipientsList"></a>

```python
recipients_list: DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList">DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `email_recipients_group_id_input`<sup>Optional</sup> <a name="email_recipients_group_id_input" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.emailRecipientsGroupIdInput"></a>

```python
email_recipients_group_id_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `email_recipients_group_id`<sup>Required</sup> <a name="email_recipients_group_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.emailRecipientsGroupId"></a>

```python
email_recipients_group_id: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMeteringComputationUsageStatementEmailRecipientsGroupConfig <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupConfig" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_statement_email_recipients_group

dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  email_recipients_group_id: str,
  subscription_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_group#compartment_id DataOciMeteringComputationUsageStatementEmailRecipientsGroup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupConfig.property.emailRecipientsGroupId">email_recipients_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_group#email_recipients_group_id DataOciMeteringComputationUsageStatementEmailRecipientsGroup#email_recipients_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_group#subscription_id DataOciMeteringComputationUsageStatementEmailRecipientsGroup#subscription_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_group#compartment_id DataOciMeteringComputationUsageStatementEmailRecipientsGroup#compartment_id}.

---

##### `email_recipients_group_id`<sup>Required</sup> <a name="email_recipients_group_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupConfig.property.emailRecipientsGroupId"></a>

```python
email_recipients_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_group#email_recipients_group_id DataOciMeteringComputationUsageStatementEmailRecipientsGroup#email_recipients_group_id}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_group#subscription_id DataOciMeteringComputationUsageStatementEmailRecipientsGroup#subscription_id}.

---

### DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_statement_email_recipients_group

dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_statement_email_recipients_group

dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_statement_email_recipients_group

dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.emailId">email_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct">DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_id`<sup>Required</sup> <a name="email_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.emailId"></a>

```python
email_id: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroup.DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct">DataOciMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct</a>

---



