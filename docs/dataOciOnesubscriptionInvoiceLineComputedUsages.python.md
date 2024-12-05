# `dataOciOnesubscriptionInvoiceLineComputedUsages` Submodule <a name="`dataOciOnesubscriptionInvoiceLineComputedUsages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOnesubscriptionInvoiceLineComputedUsages <a name="DataOciOnesubscriptionInvoiceLineComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages oci_onesubscription_invoice_line_computed_usages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoice_line_computed_usages

dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages(
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
  invoice_line_id: str,
  fields: typing.List[str] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionInvoiceLineComputedUsagesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#compartment_id DataOciOnesubscriptionInvoiceLineComputedUsages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.invoiceLineId">invoice_line_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#invoice_line_id DataOciOnesubscriptionInvoiceLineComputedUsages#invoice_line_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.fields">fields</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#fields DataOciOnesubscriptionInvoiceLineComputedUsages#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#id DataOciOnesubscriptionInvoiceLineComputedUsages#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#compartment_id DataOciOnesubscriptionInvoiceLineComputedUsages#compartment_id}.

---

##### `invoice_line_id`<sup>Required</sup> <a name="invoice_line_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.invoiceLineId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#invoice_line_id DataOciOnesubscriptionInvoiceLineComputedUsages#invoice_line_id}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.fields"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#fields DataOciOnesubscriptionInvoiceLineComputedUsages#fields}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#filter DataOciOnesubscriptionInvoiceLineComputedUsages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#id DataOciOnesubscriptionInvoiceLineComputedUsages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetFields">reset_fields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionInvoiceLineComputedUsagesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a>]]

---

##### `reset_fields` <a name="reset_fields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetFields"></a>

```python
def reset_fields() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOnesubscriptionInvoiceLineComputedUsages resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoice_line_computed_usages

dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoice_line_computed_usages

dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoice_line_computed_usages

dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoice_line_computed_usages

dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOnesubscriptionInvoiceLineComputedUsages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOnesubscriptionInvoiceLineComputedUsages to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOnesubscriptionInvoiceLineComputedUsages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOnesubscriptionInvoiceLineComputedUsages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList">DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.invoicelineComputedUsages">invoiceline_computed_usages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.fieldsInput">fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.invoiceLineIdInput">invoice_line_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.fields">fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.invoiceLineId">invoice_line_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.filter"></a>

```python
filter: DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList">DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList</a>

---

##### `invoiceline_computed_usages`<sup>Required</sup> <a name="invoiceline_computed_usages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.invoicelineComputedUsages"></a>

```python
invoiceline_computed_usages: DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.fieldsInput"></a>

```python
fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionInvoiceLineComputedUsagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `invoice_line_id_input`<sup>Optional</sup> <a name="invoice_line_id_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.invoiceLineIdInput"></a>

```python
invoice_line_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.fields"></a>

```python
fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `invoice_line_id`<sup>Required</sup> <a name="invoice_line_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.invoiceLineId"></a>

```python
invoice_line_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOnesubscriptionInvoiceLineComputedUsagesConfig <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoice_line_computed_usages

dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  invoice_line_id: str,
  fields: typing.List[str] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionInvoiceLineComputedUsagesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#compartment_id DataOciOnesubscriptionInvoiceLineComputedUsages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.invoiceLineId">invoice_line_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#invoice_line_id DataOciOnesubscriptionInvoiceLineComputedUsages#invoice_line_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.fields">fields</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#fields DataOciOnesubscriptionInvoiceLineComputedUsages#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#id DataOciOnesubscriptionInvoiceLineComputedUsages#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#compartment_id DataOciOnesubscriptionInvoiceLineComputedUsages#compartment_id}.

---

##### `invoice_line_id`<sup>Required</sup> <a name="invoice_line_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.invoiceLineId"></a>

```python
invoice_line_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#invoice_line_id DataOciOnesubscriptionInvoiceLineComputedUsages#invoice_line_id}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.fields"></a>

```python
fields: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#fields DataOciOnesubscriptionInvoiceLineComputedUsages#fields}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionInvoiceLineComputedUsagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#filter DataOciOnesubscriptionInvoiceLineComputedUsages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#id DataOciOnesubscriptionInvoiceLineComputedUsages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOnesubscriptionInvoiceLineComputedUsagesFilter <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoice_line_computed_usages

dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#name DataOciOnesubscriptionInvoiceLineComputedUsages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#values DataOciOnesubscriptionInvoiceLineComputedUsages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#regex DataOciOnesubscriptionInvoiceLineComputedUsages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#name DataOciOnesubscriptionInvoiceLineComputedUsages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#values DataOciOnesubscriptionInvoiceLineComputedUsages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#regex DataOciOnesubscriptionInvoiceLineComputedUsages#regex}.

---

### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoice_line_computed_usages

dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages()
```


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoice_line_computed_usages

dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct()
```


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoice_line_computed_usages

dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoice_line_computed_usages

dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionInvoiceLineComputedUsagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a>]]

---


### DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoice_line_computed_usages

dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOnesubscriptionInvoiceLineComputedUsagesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a>]

---


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoice_line_computed_usages

dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoice_line_computed_usages

dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.cost">cost</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.costRounded">cost_rounded</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.netUnitPrice">net_unit_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.parentProduct">parent_product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.product">product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.quantity">quantity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.timeMeteredOn">time_metered_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cost`<sup>Required</sup> <a name="cost" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.cost"></a>

```python
cost: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cost_rounded`<sup>Required</sup> <a name="cost_rounded" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.costRounded"></a>

```python
cost_rounded: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_unit_price`<sup>Required</sup> <a name="net_unit_price" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.netUnitPrice"></a>

```python
net_unit_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent_product`<sup>Required</sup> <a name="parent_product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.parentProduct"></a>

```python
parent_product: DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList</a>

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.product"></a>

```python
product: DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList</a>

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.quantity"></a>

```python
quantity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_metered_on`<sup>Required</sup> <a name="time_metered_on" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.timeMeteredOn"></a>

```python
time_metered_on: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages</a>

---


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoice_line_computed_usages

dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoice_line_computed_usages

dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.billingCategory">billing_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.partNumber">part_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.productCategory">product_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.ucmRateCardPartType">ucm_rate_card_part_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.unitOfMeasure">unit_of_measure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `billing_category`<sup>Required</sup> <a name="billing_category" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.billingCategory"></a>

```python
billing_category: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `part_number`<sup>Required</sup> <a name="part_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.partNumber"></a>

```python
part_number: str
```

- *Type:* str

---

##### `product_category`<sup>Required</sup> <a name="product_category" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.productCategory"></a>

```python
product_category: str
```

- *Type:* str

---

##### `ucm_rate_card_part_type`<sup>Required</sup> <a name="ucm_rate_card_part_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.ucmRateCardPartType"></a>

```python
ucm_rate_card_part_type: str
```

- *Type:* str

---

##### `unit_of_measure`<sup>Required</sup> <a name="unit_of_measure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.unitOfMeasure"></a>

```python
unit_of_measure: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct</a>

---


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoice_line_computed_usages

dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoice_line_computed_usages

dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.billingCategory">billing_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.partNumber">part_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.productCategory">product_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.ucmRateCardPartType">ucm_rate_card_part_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.unitOfMeasure">unit_of_measure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `billing_category`<sup>Required</sup> <a name="billing_category" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.billingCategory"></a>

```python
billing_category: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `part_number`<sup>Required</sup> <a name="part_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.partNumber"></a>

```python
part_number: str
```

- *Type:* str

---

##### `product_category`<sup>Required</sup> <a name="product_category" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.productCategory"></a>

```python
product_category: str
```

- *Type:* str

---

##### `ucm_rate_card_part_type`<sup>Required</sup> <a name="ucm_rate_card_part_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.ucmRateCardPartType"></a>

```python
ucm_rate_card_part_type: str
```

- *Type:* str

---

##### `unit_of_measure`<sup>Required</sup> <a name="unit_of_measure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.unitOfMeasure"></a>

```python
unit_of_measure: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct</a>

---



