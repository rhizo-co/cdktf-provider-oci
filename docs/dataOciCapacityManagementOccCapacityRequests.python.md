# `dataOciCapacityManagementOccCapacityRequests` Submodule <a name="`dataOciCapacityManagementOccCapacityRequests` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementOccCapacityRequests <a name="DataOciCapacityManagementOccCapacityRequests" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests oci_capacity_management_occ_capacity_requests}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_requests

dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests(
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
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCapacityManagementOccCapacityRequestsFilter]] = None,
  id: str = None,
  namespace: str = None,
  occ_availability_catalog_id: str = None,
  request_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#compartment_id DataOciCapacityManagementOccCapacityRequests#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#display_name DataOciCapacityManagementOccCapacityRequests#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter">DataOciCapacityManagementOccCapacityRequestsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#id DataOciCapacityManagementOccCapacityRequests#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#namespace DataOciCapacityManagementOccCapacityRequests#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.occAvailabilityCatalogId">occ_availability_catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#occ_availability_catalog_id DataOciCapacityManagementOccCapacityRequests#occ_availability_catalog_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.requestType">request_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#request_type DataOciCapacityManagementOccCapacityRequests#request_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#compartment_id DataOciCapacityManagementOccCapacityRequests#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#display_name DataOciCapacityManagementOccCapacityRequests#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter">DataOciCapacityManagementOccCapacityRequestsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#filter DataOciCapacityManagementOccCapacityRequests#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#id DataOciCapacityManagementOccCapacityRequests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#namespace DataOciCapacityManagementOccCapacityRequests#namespace}.

---

##### `occ_availability_catalog_id`<sup>Optional</sup> <a name="occ_availability_catalog_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.occAvailabilityCatalogId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#occ_availability_catalog_id DataOciCapacityManagementOccCapacityRequests#occ_availability_catalog_id}.

---

##### `request_type`<sup>Optional</sup> <a name="request_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.requestType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#request_type DataOciCapacityManagementOccCapacityRequests#request_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetOccAvailabilityCatalogId">reset_occ_availability_catalog_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetRequestType">reset_request_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCapacityManagementOccCapacityRequestsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter">DataOciCapacityManagementOccCapacityRequestsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_occ_availability_catalog_id` <a name="reset_occ_availability_catalog_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetOccAvailabilityCatalogId"></a>

```python
def reset_occ_availability_catalog_id() -> None
```

##### `reset_request_type` <a name="reset_request_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetRequestType"></a>

```python
def reset_request_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementOccCapacityRequests resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_requests

dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_requests

dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_requests

dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_requests

dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCapacityManagementOccCapacityRequests resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCapacityManagementOccCapacityRequests to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCapacityManagementOccCapacityRequests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementOccCapacityRequests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList">DataOciCapacityManagementOccCapacityRequestsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.occCapacityRequestCollection">occ_capacity_request_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter">DataOciCapacityManagementOccCapacityRequestsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.occAvailabilityCatalogIdInput">occ_availability_catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.requestTypeInput">request_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.occAvailabilityCatalogId">occ_availability_catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.requestType">request_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.filter"></a>

```python
filter: DataOciCapacityManagementOccCapacityRequestsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList">DataOciCapacityManagementOccCapacityRequestsFilterList</a>

---

##### `occ_capacity_request_collection`<sup>Required</sup> <a name="occ_capacity_request_collection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.occCapacityRequestCollection"></a>

```python
occ_capacity_request_collection: DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCapacityManagementOccCapacityRequestsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter">DataOciCapacityManagementOccCapacityRequestsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `occ_availability_catalog_id_input`<sup>Optional</sup> <a name="occ_availability_catalog_id_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.occAvailabilityCatalogIdInput"></a>

```python
occ_availability_catalog_id_input: str
```

- *Type:* str

---

##### `request_type_input`<sup>Optional</sup> <a name="request_type_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.requestTypeInput"></a>

```python
request_type_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `occ_availability_catalog_id`<sup>Required</sup> <a name="occ_availability_catalog_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.occAvailabilityCatalogId"></a>

```python
occ_availability_catalog_id: str
```

- *Type:* str

---

##### `request_type`<sup>Required</sup> <a name="request_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.requestType"></a>

```python
request_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementOccCapacityRequestsConfig <a name="DataOciCapacityManagementOccCapacityRequestsConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_requests

dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCapacityManagementOccCapacityRequestsFilter]] = None,
  id: str = None,
  namespace: str = None,
  occ_availability_catalog_id: str = None,
  request_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#compartment_id DataOciCapacityManagementOccCapacityRequests#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#display_name DataOciCapacityManagementOccCapacityRequests#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter">DataOciCapacityManagementOccCapacityRequestsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#id DataOciCapacityManagementOccCapacityRequests#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#namespace DataOciCapacityManagementOccCapacityRequests#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.occAvailabilityCatalogId">occ_availability_catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#occ_availability_catalog_id DataOciCapacityManagementOccCapacityRequests#occ_availability_catalog_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.requestType">request_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#request_type DataOciCapacityManagementOccCapacityRequests#request_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#compartment_id DataOciCapacityManagementOccCapacityRequests#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#display_name DataOciCapacityManagementOccCapacityRequests#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCapacityManagementOccCapacityRequestsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter">DataOciCapacityManagementOccCapacityRequestsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#filter DataOciCapacityManagementOccCapacityRequests#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#id DataOciCapacityManagementOccCapacityRequests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#namespace DataOciCapacityManagementOccCapacityRequests#namespace}.

---

##### `occ_availability_catalog_id`<sup>Optional</sup> <a name="occ_availability_catalog_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.occAvailabilityCatalogId"></a>

```python
occ_availability_catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#occ_availability_catalog_id DataOciCapacityManagementOccCapacityRequests#occ_availability_catalog_id}.

---

##### `request_type`<sup>Optional</sup> <a name="request_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.requestType"></a>

```python
request_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#request_type DataOciCapacityManagementOccCapacityRequests#request_type}.

---

### DataOciCapacityManagementOccCapacityRequestsFilter <a name="DataOciCapacityManagementOccCapacityRequestsFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_requests

dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#name DataOciCapacityManagementOccCapacityRequests#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#values DataOciCapacityManagementOccCapacityRequests#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#regex DataOciCapacityManagementOccCapacityRequests#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#name DataOciCapacityManagementOccCapacityRequests#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#values DataOciCapacityManagementOccCapacityRequests#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#regex DataOciCapacityManagementOccCapacityRequests#regex}.

---

### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_requests

dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection()
```


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_requests

dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems()
```


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_requests

dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails()
```


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_requests

dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct()
```


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_requests

dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementOccCapacityRequestsFilterList <a name="DataOciCapacityManagementOccCapacityRequestsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_requests

dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementOccCapacityRequestsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter">DataOciCapacityManagementOccCapacityRequestsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCapacityManagementOccCapacityRequestsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter">DataOciCapacityManagementOccCapacityRequestsFilter</a>]]

---


### DataOciCapacityManagementOccCapacityRequestsFilterOutputReference <a name="DataOciCapacityManagementOccCapacityRequestsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_requests

dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter">DataOciCapacityManagementOccCapacityRequestsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCapacityManagementOccCapacityRequestsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter">DataOciCapacityManagementOccCapacityRequestsFilter</a>]

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_requests

dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_requests

dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantity">handover_quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockId">occ_handover_resource_block_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `handover_quantity`<sup>Required</sup> <a name="handover_quantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantity"></a>

```python
handover_quantity: str
```

- *Type:* str

---

##### `occ_handover_resource_block_id`<sup>Required</sup> <a name="occ_handover_resource_block_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockId"></a>

```python
occ_handover_resource_block_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct</a>

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_requests

dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_requests

dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.actualHandoverQuantity">actual_handover_quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.associatedOccHandoverResourceBlockList">associated_occ_handover_resource_block_list</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.dateActualHandover">date_actual_handover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.dateExpectedHandover">date_expected_handover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.demandQuantity">demand_quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.expectedHandoverQuantity">expected_handover_quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.sourceWorkloadType">source_workload_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.workloadType">workload_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actual_handover_quantity`<sup>Required</sup> <a name="actual_handover_quantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.actualHandoverQuantity"></a>

```python
actual_handover_quantity: str
```

- *Type:* str

---

##### `associated_occ_handover_resource_block_list`<sup>Required</sup> <a name="associated_occ_handover_resource_block_list" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.associatedOccHandoverResourceBlockList"></a>

```python
associated_occ_handover_resource_block_list: DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList</a>

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `date_actual_handover`<sup>Required</sup> <a name="date_actual_handover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.dateActualHandover"></a>

```python
date_actual_handover: str
```

- *Type:* str

---

##### `date_expected_handover`<sup>Required</sup> <a name="date_expected_handover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.dateExpectedHandover"></a>

```python
date_expected_handover: str
```

- *Type:* str

---

##### `demand_quantity`<sup>Required</sup> <a name="demand_quantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.demandQuantity"></a>

```python
demand_quantity: str
```

- *Type:* str

---

##### `expected_handover_quantity`<sup>Required</sup> <a name="expected_handover_quantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.expectedHandoverQuantity"></a>

```python
expected_handover_quantity: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `source_workload_type`<sup>Required</sup> <a name="source_workload_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.sourceWorkloadType"></a>

```python
source_workload_type: str
```

- *Type:* str

---

##### `workload_type`<sup>Required</sup> <a name="workload_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.workloadType"></a>

```python
workload_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails</a>

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_requests

dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_requests

dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.dateExpectedCapacityHandover">date_expected_capacity_handover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.occAvailabilityCatalogId">occ_availability_catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.occCustomerGroupId">occ_customer_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.patchOperations">patch_operations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.requestState">request_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.requestType">request_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `date_expected_capacity_handover`<sup>Required</sup> <a name="date_expected_capacity_handover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.dateExpectedCapacityHandover"></a>

```python
date_expected_capacity_handover: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.details"></a>

```python
details: DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `occ_availability_catalog_id`<sup>Required</sup> <a name="occ_availability_catalog_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.occAvailabilityCatalogId"></a>

```python
occ_availability_catalog_id: str
```

- *Type:* str

---

##### `occ_customer_group_id`<sup>Required</sup> <a name="occ_customer_group_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.occCustomerGroupId"></a>

```python
occ_customer_group_id: str
```

- *Type:* str

---

##### `patch_operations`<sup>Required</sup> <a name="patch_operations" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.patchOperations"></a>

```python
patch_operations: DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `request_state`<sup>Required</sup> <a name="request_state" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.requestState"></a>

```python
request_state: str
```

- *Type:* str

---

##### `request_type`<sup>Required</sup> <a name="request_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.requestType"></a>

```python
request_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems</a>

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_requests

dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_requests

dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.position">position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.selectedItem">selected_item</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.selection">selection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.value">value</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.position"></a>

```python
position: str
```

- *Type:* str

---

##### `selected_item`<sup>Required</sup> <a name="selected_item" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.selectedItem"></a>

```python
selected_item: str
```

- *Type:* str

---

##### `selection`<sup>Required</sup> <a name="selection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.selection"></a>

```python
selection: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.value"></a>

```python
value: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations</a>

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_requests

dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_requests

dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.items"></a>

```python
items: DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection</a>

---



